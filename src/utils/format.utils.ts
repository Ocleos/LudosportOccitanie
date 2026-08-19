import dayjs from 'dayjs';

export const FORMAT_TIME = 'LT';
export const FORMAT_TIME_SECONDS = 'LTS';
export const FORMAT_DATE = 'L';
export const FORMAT_FULL_DATE = 'LL';
export const FORMAT_FULL_DATE_TIME = 'LLLL';

export const formatDate = (value: string | number | dayjs.Dayjs | Date | null | undefined, format: string) =>
  dayjs(value).format(format);
