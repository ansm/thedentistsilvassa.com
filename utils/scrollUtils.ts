export const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const headerHeight = document.getElementById("header")?.offsetHeight || 0
    const targetPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

export const scrollToElement = (id: string, offset = 100) => {
  const element = document.getElementById(id)
  if (element) {
    const headerHeight = document.getElementById("header")?.offsetHeight || 0
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
