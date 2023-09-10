export const dateFormat = (date: number) => {
  const newDate = new Date(date)

  const dateTimeFormat = new Intl.DateTimeFormat('lat-RS', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return dateTimeFormat.format(newDate)
}
