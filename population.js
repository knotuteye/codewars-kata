function nbYear(p0, percent, aug, p) {
  let n_years = 0;
  while (p0 < p) {
    p0 = aug + p0 * (1 + percent / 100);
    n_years++;
  }
  return n_years;
}
