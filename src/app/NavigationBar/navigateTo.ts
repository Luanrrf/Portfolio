export function navigateTo(id: string) {
  const element = document.getElementById(id);

  if (element) {
    const actualOffset = window.scrollY;
    const offsetTop = element.offsetTop;

    const difference = Math.abs(actualOffset - offsetTop);
    console.log(difference);

    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        window.scrollTo({
          top:
            actualOffset < offsetTop
              ? actualOffset + (difference / 60) * i
              : actualOffset - (difference / 60) * i,
          behavior: "smooth",
        });
      }, i * 10);
    }
  }
}
