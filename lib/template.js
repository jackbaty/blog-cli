'use strict';
const formatDate = (d = new Date) => {
  const userDate = typeof d === 'string' ? new Date(d) : d;
  const [rawDate, time] = userDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).split(/,\s+/);

  const date = rawDate.split('/').reverse().join('-');

  return [date, time].join(' ');
};

module.exports = `Date: ${formatDate(new Date())}
Tags:
Micro: true
Icon: 🌀
`;
