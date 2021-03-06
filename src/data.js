export const headers = []

for (let i = 0, length = 10; i < length; i += 1) {
  headers.push({
    key: `key${i}`,
    value: `Header ${i + 1}`
  })
}

export const rows = []

for (let i = 0, length = 2000; i < length; i += 1) {
  const item = {}
  for (let j = 0, length2 = headers.length; j < length2; j += 1) {
    item[headers[j].key] = `Item ${i * headers.length + j + 1}`
  }
  rows.push(item)
}
