## git 终端常用快捷键
  1. 使用 ctrl+L 清屏
  2. `ll` 文件列表
  3. `pwd` 显示当前所在文件夹路径
  4. `ls -a` 隐藏的目录也会显示
----

## git 创建仓库的步骤：
  1. 创建一个仓库文件夹
  2. 使用 git 终端 `git init` 初始化这个仓库
---
## 向本地仓库添加一个文件
  1. 此文件夹一定要在 工作目录(文件夹下面包含.git的文件)下面才可以

  2. 使用 git 命令 `git config --global user.email "hanqingyi1989@163.com"`配置邮箱
  3. 使用 git 命令 `git config --global user.name "simon"` 配置用户名
  4. 创建 .gitignore 文件 创建忽略文件
  5. 提交文件的命令
      - `git pull` 拉取
      - `git add .` 添加当前文件夹中的所文件
      - `git commit -m "提交信息"` 添加本次提交的相关信息
      - `git push` 推送到远程仓库
---
## 配置忽略文件
  - 创建 .gitignore 文件
  - 在文件中 **把需要忽略的文件夹/文件后缀** 名称前加 `* ` 即可；例如: `*.txt`
  - 如果我们指示仅仅想让文件 `a.txt` 忽略，那就直接在 `.gitignore` 文件中直接写 `a.txt` 即可
  - 如果我们想让所有的 `txt` 文件都忽略，而只有 `a.txt` 文件不被忽略，可通过如下设置即可：
    ```javaScript
    *txt
    !a.txt
    ```
  - 忽略文件夹 `/vendor`
  - 忽略文件夹下面的某个文件 `/vendor/*.txt`
---

## 从版本中删除资源
  命令 `rm` 是删除
  - 使用 `git rm xxx.txt` 是把*本地和版本库* 中的文件 `xxx.txt` 一并删除掉
  - 如果我们想*保留本地资源，仅仅只是想删除版本库中*的文件的命令 `git rm --cached xxx.txt`
---

## `git mv` 仓库中如何修改文件名
  - `git mv 原名 修改后的名`
---

## `git log` 查看版本历史操作行为
  - `git log -p` 显示的是文件的变动信息
  - `git log --oneline` 显示所有提交的历史记录列表信息的简洁形式
---

## `git commit --amend 回车` 进入修改命令，修改完毕后使用 `Esc+ :wq` 退出
---

## git 对文件的管理
  - `git rm --cached a.php` 把文件 a.php 第一次从暂存区撤回
  - `git reset HEAD a.php` 文件 a.php 后面有修改，并且是第二次甚至更多次的从暂存区撤回
  - `git checkout --<fileName>` 暂存区的某个文件恢复到上一次
  - **向这些是有提示的**
---

## alias 别名操作
  - `git config --global alias.a add` 替换 `git add .`
  - `git config --global alias.s status` 替换 `git status`
  - 我们还可以直接在 `git config` 配置文件中直接修改
---

## `git branch `查看分支
  - `git branch <分支名>` 创建分支
  - `git checkout <分支名>` 切换分支
  - `git checkout -b <分支名>` 切换并创建分支
  - `git merge <需要合并的分支名>` 合并分支， ***合并分支之前，首先要切换到主分支上***
  - `git branch -d <要删除的分支名>` 删除分支 如果我们想***强制删除某一个分支，虽然这个分支还没有合并*** 可以使用 `git branch -D <分支名>`
  - `git branch --merged` 查看合并的分支
  - `git branch --no-merged` 查看没有合并的分支
---

## 如何正确处理分支冲突
  - 区分：
    ```github
    <<<<<< HEAD
      bbs
    ======  从此处开始以上是 master 中的，以下是 ask 中的
      ask
    >>>>>> ask
    ```
---

## 标准的分支操作工作流
  - 默认创建的分支 `master` 叫稳定分支
  - 我们通常会在 `master` 中分出来一个 `develop` 开发分支
  - 我们还会在 `develop` 分支上还会创建一个我们自己的 **本地分支**
---

## 临时存储区
  - 如果我们所在的分支有修改，但是我们现在要切换到其他分支进行修改，如何操作?
  - `git stash` 命令就可以让当前分支上的内容暂时保存到缓存区中
  - `git stash list` 查看当前缓存的列表
  - `git stash apply` 回复暂存区，但是暂存区还是存在的
  - `git stash drop stash@{0}` 这时候，暂存区就没有了
    - **需要说明的：**
      1. `stash@{0}` 是我们在查看 `git stash list` 命令后，显示的暂存区的标识符
      2. 第二个需要说明的： 只有在我们的文件使用过 `git add .` 或 `git commit -m 'message'` 之后，才可以使用 `git stash` 这个命令，否则是不能使用的
---

## git的 tag 标签
  - 此 tag 标签的使用，是在某个阶段，我们开发完成了，给我们的项目打上 `1.0 版本/1.2 版本`之类的标签
  - `git tag` 显示我们当前的标签列表
  - `git tag v1.0` 给当前项目打上版本标签
  - 标签是一个阶段的总结，而且还必须是稳定的，具有完整功能的版本才可以打标签
---

## 生成 zip 代码发布压缩包
  - `git archive master --prefix='hdcms/' --forma=zip > hdcms.zip` 就可以生成我们的压缩包
    - **几项参数的说明：**
      - `master` 主分支
      - `--prefix`
      - `hdcms` 压缩后的文件夹
      - `--forma=zip` 格式化之后的格式为 zip
---

## 合并分支产生的实际问题 `rebase` 要解决的问题
  - 我们希望冲突修改是有某个分支的作者来操作，就要使用 `rebase` 可理解为 `replace base`
  - 先在某一个分支上使用 `git rebase master` 把主分支往后移
  - 然后再切换到主分支上，进行 `git merge <分支名>`; 这时候合并后的合并记录就非常干净

---

## 国内外托管平台
  -

## 将本地代码推到远程：这种方式是本地没有仓库的情况下使用
  1. SSH 协议 安全通信方式的主流方式。使用SSH通信方式的设置：
      - `git remote add origin git@github.com:simonsingerCode/mall.git` 与远程仓库的链接
      - `git push -u origin master` 把本地仓库推送到远程
      - 刚刚建立的仓库里面就存在上面的代码

  2. 仓库里面的中间部分的代码，将本地仓库的代码推送到远程仓库
---

## 创建 SSH 密钥及在github上配置公钥
  1. 使用git终端命令行
      - ssh-keygen -t rsa  敲回车，一路回车
      - 生成的密钥对是在当前用户下面的 .ssh 这个文件夹里面有两个文件
        - id_rsa 私钥
        - id_rsa.pub 公钥

        - 打开github 里面，点击自己的头像，settings -> 找到 SSH and GPG keys 点击选择 右上角 New SSH key 这里面粘贴的是 公钥
---

## 克隆远程仓库到本地的方式
  1. 首先在本地建立一个项目文件夹
  2. 打开 github 的远程仓库
  3. 找到我们要克隆的代码的右上角，有一个 clone or download 选择我们的 克隆方式,是 https 方式还是 ssh 方  式，两种方式是一样的
  4. ssh 方式 clone, 同样需要我们先配置好我们的密钥。
  5. 使用命令行 clone
  6. git clone url(项目文件的url地址)
  7.
---

## 将本地仓库推送到远程 {  这种是已经存在本地仓库的情况下使用
  1. 找到仓库，打开 命令行窗口
      - 新仓库中间部分的一些代码
        - `git remote add origin git@github.com:simonsingerCode/mall.git` 和远程仓库建立链接
        - `git push -u origin master` 将本地代码推送到远程仓库
---

## https 的方式建立远程仓库的链接
  - 使用此种方式和 SSH 是一样的，唯一的区别就是，此种方式使用的用户名和密码的方式来提交我们的代码的

---

## 本地分支和远程分支同步
  - `git brach -a` 查看本地和远程分支
  - `git push --set-upstream origin <分支名>` 将本地分支推送到远程，使远程也有一个与我们本地分支保持一致
  - 然后在正常流程进行提交
---

## 新入职参与项目开发时分支使用
  1. 新员工要把整个项目down 下来到本地，进行自己的开发。这个流程如下：
      1. 进入项目的 github 赋值项目地址 url
      2. `git clone <项目git上的url> fileName`  将项目检出到 fileName 文件夹中
      3. `cd 到 fileName 中`
      4. `git branch -a` 查看本地和远程分支
      5. `git pull origin ask:ask` 请求远程，将远程的 `ask` 分支检出到本地的 `ask` 分支
      6. `git branch -a` 再次查看远程和当前的分支情况
      7. `git checkout ask` 此时我们本地和远程仓库中的分支、文件都是一样的
      8. 此时就可以参与开发工作
      9. 正常提交流程
      10. 此时 `git push` 就会提示本地分支没有和远程分支建立关联，使用 `git push --set-upstream origin ask` 将本地分支和远程分支建立关联
---

## 远程分支的合并
  - `git checkout master` 切换到主分支上
  - `git pull` 拉取最新代码
  - `git checkout ask` 切换到 ask 分支上
  - `git rebase master` 将主分支向后移
  - `git checkout master`
  - `git merge ask`
  - `git push`
---

## 删除远程分支
  - `git push origin --delete <要删除的远程分支>` 就可以删除远程分支
  - `git branch -d <要删除的分支名>` 就可以删除本地分支
---

## 自动部署-->流程分析与创建web站点
  - 当我们项目开发完毕的时候，我们希望 web 服务器自动拉取我们的github 上的项目如何操作?
    - ``
    - ``
    - ``
    - ``

---

## 推送修改的文件以及冲突解决
  1. 我们在提交代码的时候，有时候会有冲突现象，如何解决这种冲突？
      当有冲突的时候，首先我们要做的只有 git pull 先拉取代码，然后在查看，那里i出错了。
      ```javaScript
      /*
          <<<<<<<<HEAD 下面是
              当前是我们在仓库中修改的内容
          ==========
              这里面是服务端上面的内容
          >>>>>>>>>>
      */
      ```

  2. 注意： 冲突 必须是手动合并
      出现冲突的原因：
        1. 可能修改的同一行代码，或者是两个人修改的代码离的距离非常的近，git 不知道该如何合并代码造成的。
