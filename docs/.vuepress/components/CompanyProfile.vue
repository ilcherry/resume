<template>
  <el-row :gutter="20" justify="space-between">
    <el-col :span="8"
      ><strong :style="{ fontWeight: '700' }">{{ name }}</strong></el-col
    >
    <el-col :span="8" :style="{ textAlign: 'center' }"
      ><strong :style="{ fontWeight: '700' }">{{ title }}</strong></el-col
    >
    <el-col :span="8" :style="{ textAlign: 'right' }"
      ><strong :style="{ fontWeight: '700' }">{{ workTime }}</strong></el-col
    >
  </el-row>
</template>

<script>
export default {
  name: "CompanyProfile",
  props: {
    name: String,
    title: String,
    department: String,
    workTime: String,
  },
};
</script>

<style scoped></style>
