import { Hour } from '@/galette-and-co/domain/time/Hour';
import { Minute } from '@/galette-and-co/domain/time/Minute';

export interface Time {
  hour: Hour;
  minute: Minute;
}
