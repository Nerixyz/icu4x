// generated by diplomat-tool
import type { Calendar } from "./Calendar"
import type { CalendarError } from "./CalendarError"
import type { CalendarParseError } from "./CalendarParseError"
import type { DateTime } from "./DateTime"
import type { IsoDate } from "./IsoDate"
import type { IsoWeekday } from "./IsoWeekday"
import type { Time } from "./Time"
import type { WeekCalculator } from "./WeekCalculator"
import type { WeekOf } from "./WeekOf"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** An ICU4X DateTime object capable of containing a ISO-8601 date and time.
*
*See the [Rust documentation for `DateTime`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html) for more information.
*/
export class IsoDateTime {
    

    get ffiValue(): pointer;

    static create(year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number): IsoDateTime;

    static fromDateAndTime(date: IsoDate, time: Time): IsoDateTime;

    static fromString(v: string): IsoDateTime;

    get date(): IsoDate;

    get time(): Time;

    toAny(): DateTime;

    toCalendar(calendar: Calendar): DateTime;

    get hour(): number;

    get minute(): number;

    get second(): number;

    get nanosecond(): number;

    get dayOfYear(): number;

    get dayOfMonth(): number;

    get dayOfWeek(): IsoWeekday;

    weekOfMonth(firstWeekday: IsoWeekday): number;

    weekOfYear(calculator: WeekCalculator): WeekOf;

    get month(): number;

    get year(): number;

    get isInLeapYear(): boolean;

    get monthsInYear(): number;

    get daysInMonth(): number;

    get daysInYear(): number;
}