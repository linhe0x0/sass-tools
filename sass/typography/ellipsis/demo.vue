<template>
  <p class="ellipsis">
    This is a very long text. It's very very very very very very very very very
    very very very very very very very very long.
  </p>
  <hr />
  <p class="ellipsis-2">
    This is a very long text. It's very very very very very very very very very
    very very very very very very very very very very very very very very very
    very very very very very very very very very very long.
  </p>
  <hr />
  <p class="ellipsis-3">
    This is a very long text. It's very very very very very very very very very
    very very very very very very very very very very very very very very very
    very very very very very very very very very very very very very very very
    very very very very very very very very very very very very very very very
    long.
  </p>
</template>

<style lang="scss" scoped>
@use './ellipsis' as *;

.ellipsis {
  @include ellipsis();
}
.ellipsis-2 {
  @include ellipsis(2);
}
.ellipsis-3 {
  @include ellipsis(3);
}
</style>
