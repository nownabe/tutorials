#include <stdio.h>

int main(void) {
  int x = 10;
  int y = 20;

  __asm__(
      "mov eax, %1 \n\t"
      "mov %0, eax\n\t"
      : "=r" (y) // output
      : "r" (x)  // input
      : "eax"    // work register
      );

  printf("y = %d", y);

  return 0;
}
