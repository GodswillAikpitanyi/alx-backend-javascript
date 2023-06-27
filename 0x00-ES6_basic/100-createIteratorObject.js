export default function createIteratorObject(report) {
  const result = [];
  for (const index of Object.values(report.allEmployees)) {
    result.push(...index);
  }
  return result;
}
