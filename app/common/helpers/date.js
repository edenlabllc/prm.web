import formatFn from 'date-fns/format';
import parseFn from 'date-fns/parse';
import moment from 'moment';

export const format = (date, format = 'DD.MM.YYYY') => formatFn(parseFn(date), format);

export const clearTimeZone = date =>
  moment(date).format('YYYY-MM-DDTHH:mm:ss');
