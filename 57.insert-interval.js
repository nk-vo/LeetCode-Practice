// Time complexity : O(n).
// Space complexity : O(n).

var insert = function insert(intervals, newInterval) {
  const result = [];
  let idx = 0;

  // Add intervals that are before newInterval.
  while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
    result.push(intervals[idx]);
    idx++;
  }

  // Merge newInterval with overlapping intervals.
  while (idx < intervals.length && intervals[idx][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[idx][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[idx][1], newInterval[1]);
    idx++;
  }
  result.push(newInterval);

  // Add intervals that are after newInterval.
  while (idx < intervals.length) {
    result.push(intervals[idx]);
    idx++;
  }

  return result;
}