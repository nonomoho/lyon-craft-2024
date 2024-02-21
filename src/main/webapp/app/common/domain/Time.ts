import { Hour } from '@/common/domain/Hour';

export type Minute = number; // 0 - 59

export interface Time {
  hour: Hour;
  minute: Minute;
}
