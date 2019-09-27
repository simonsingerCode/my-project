## buffer (16进制)

##  拷贝
  - buffer.fill 方法，填充 buffer 中的内容
  - buffer.toString 方法，将buffer转换为字符串
  - buffer.slice 方法，截取想要的 buffer  拷贝出来的存放的是内容空间
  - buffer.copy 方法，拷贝 buffer
  - Buffer.concat 方法，buffer的拼接方法
  - Buffer.isBuffer 判断是否是 buffer 类型

### buffer.slice 方法  截取、克隆(深：  浅：slice, Object.assign() )
  > 深拷贝：就是两个人长得一样，但是毫无关系
  - **深拷贝实现方式： 递归循环拷贝**
  - 首先使用 JSON.stringify()
  - 然后再使用 JSON.parse(); 就是可以实现拷贝，但是，这里面如果有函数的话，就会丢失

  > 浅拷贝：两个对象中存放的空间是一样的

### buffer进制转换
  - MD5 是加钥算法
  -
