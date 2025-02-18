// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

#include "DataProvider.h"
#include "Locale.h"
#include "SignedFixedDecimal.h"
#include "FixedDecimalFormatter.h"
#include "Logger.h"
#include <string.h>
#include <stdio.h>

int main() {
    icu4x_Logger_init_simple_logger_mv1();

    struct DiplomatStringView locale_str = {
        "bn",
        2
    };
    icu4x_Locale_from_string_mv1_result locale_result = icu4x_Locale_from_string_mv1(locale_str);
    if (!locale_result.is_ok) {
        return 1;
    }
    Locale* locale = locale_result.ok;
    DataProvider* provider = icu4x_DataProvider_compiled_mv1();

    SignedFixedDecimal* decimal = icu4x_SignedFixedDecimal_from_uint64_mv1(1000007);

    FixedDecimalGroupingStrategy_option o = {.ok = FixedDecimalGroupingStrategy_Auto, .is_ok = true};

    icu4x_FixedDecimalFormatter_create_with_grouping_strategy_mv1_result fdf_result =
        icu4x_FixedDecimalFormatter_create_with_grouping_strategy_mv1(provider, locale, o);
    if (!fdf_result.is_ok)  {
        printf("Failed to create FixedDecimalFormatter\n");
        return 1;
    }
    FixedDecimalFormatter* fdf = fdf_result.ok;
    char output[40];

    DiplomatWrite write = diplomat_simple_write(output, 40);

    icu4x_FixedDecimalFormatter_format_mv1(fdf, decimal, &write);
    if (write.grow_failed) {
        printf("format overflowed the string.\n");
        return 1;
    }
    printf("Output is %s\n", output);

    const char* expected = u8"১০,০০,০০৭";
    if (strcmp(output, expected) != 0) {
        printf("Output does not match expected output!\n");
        return 1;
    }

    icu4x_SignedFixedDecimal_multiply_pow10_mv1(decimal, 2);

    icu4x_SignedFixedDecimal_set_sign_mv1(decimal, FixedDecimalSign_Negative);

    write = diplomat_simple_write(output, 40);

    icu4x_FixedDecimalFormatter_format_mv1(fdf, decimal, &write);
    if (write.grow_failed) {
        printf("format overflowed the string.\n");
        return 1;
    }
    printf("Output x100 and negated is %s\n", output);

    expected = u8"-১০,০০,০০,৭০০";
    if (strcmp(output, expected) != 0) {
        printf("Output does not match expected output!\n");
        return 1;
    }

    icu4x_SignedFixedDecimal_destroy_mv1(decimal);

    struct DiplomatStringView fixed_decimal_str = {
        "1000007.070",
        11
    };

    icu4x_SignedFixedDecimal_from_string_mv1_result fd_result = icu4x_SignedFixedDecimal_from_string_mv1(fixed_decimal_str);
    if (!fd_result.is_ok) {
        printf("Failed to create FixedDecimal from string.\n");
        return 1;
    }
    decimal = fd_result.ok;

    write = diplomat_simple_write(output, 40);

    icu4x_FixedDecimalFormatter_format_mv1(fdf, decimal, &write);
    if (write.grow_failed) {
        printf("format overflowed the string.\n");
        return 1;
    }
    printf("Output is %s\n", output);

    expected = u8"১০,০০,০০৭.০৭০";
    if (strcmp(output, expected) != 0) {
        printf("Output does not match expected output!\n");
        return 1;
    }

    icu4x_SignedFixedDecimal_destroy_mv1(decimal);
    icu4x_FixedDecimalFormatter_destroy_mv1(fdf);
    icu4x_Locale_destroy_mv1(locale);
    icu4x_DataProvider_destroy_mv1(provider);

    return 0;
}
