// Находит первый элемент, с нужным значением offsetTop в списке. Использует бинарный поиск.
export const findFirstElementIndexByOffsetTop = (elements: HTMLElement[], offsetTop: number) => {
  let index = 0
  let half = elements.length
  let indexOffset = 0
  let element = elements[index]
  offsetTop = Math.max(offsetTop, 0)
  while (half !== 0) {
    half = Math.floor(half / 2) || 1
    element = elements[index]
    indexOffset = elements[index].offsetTop
    if (index === elements.length - 1 || (indexOffset + element.offsetHeight >= offsetTop && indexOffset <= offsetTop)) {
      half = 0
      break
    } else if (indexOffset < offsetTop) {
      index += half
    } else {
      index -= half
    }
  }
  return index
}
