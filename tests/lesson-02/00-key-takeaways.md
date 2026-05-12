# Tài liệu Tổng hợp: Playwright, Git và Hệ thống Quản lý Phiên bản

## 1. Giới thiệu về Playwright (Nhà viết kịch)
**Playwright** là một framework hiện đại dành cho kiểm thử tự động (Automation Testing), hiện đang được cộng đồng tin dùng rộng rãi.

### Đặc điểm và Ưu điểm
* **Hỗ trợ nền tảng:** Hiện tại đã hỗ trợ tốt trên **Web**, chưa hỗ trợ nền tảng Mobile App.
* **Cross Browser:** Hoạt động trên nhiều trình duyệt khác nhau.
* **Cross Platform:** Viết mã một lần, chạy được trên nhiều hệ điều hành: **Windows**, **macOS**, **Linux**.
* **Giảm thiểu Flaky Test:** Tích hợp sẵn các cơ chế tự động:
    * *Auto waiting:* Tự động đợi phần tử sẵn sàng.
    * *Auto retry:* Tự động thử lại lệnh khi gặp lỗi tạm thời.
* **Báo cáo (Report):** Có thể tùy chỉnh (Custom). Mặc định khá đầy đủ, nhưng có thể viết thêm script để làm rõ các nội dung mong muốn.
* **Code Gen:** Tính năng thao tác để tự sinh mã nguồn (ít người dùng chuyên nghiệp sử dụng).
* **Ngôn ngữ:** Ưu tiên **TypeScript (TS)** vì được cập nhật liên tục thay vì Java.

### Các câu lệnh cơ bản
| Thao tác | Câu lệnh / Đoạn mã |
| :--- | :--- |
| **Cài đặt** | `npm init playwright@latest` |
| **Đi tới một trang web** | `await page.goto('https://...')` |
| **Kiểm tra tiêu đề** | `await expect(page).toHaveTitle(/Text/)` |
| **Click vào link có chữ** | `await page.getByRole('link', {name: 'Text'}).click();` |
| **Kiểm tra heading hiển thị** | `await expect(page.getByRole('heading', {name: 'Text'})).toBeVisible();` |

> **Lưu ý về cú pháp:**
> * Luôn có `await` ở đầu các lệnh bất đồng bộ.
> * Dùng `expect(page)` để thực hiện các bước kiểm tra (Assertion).
> * Sử dụng `page.getByRole` để tìm kiếm vị trí phần tử.
> * Dùng `.toBeVisible()` để kiểm tra hiển thị và `.click()` để thực hiện thao tác nhấn.

---

## 2. NVM: Quản lý Version
**Node.js** đóng vai trò là "trạm trung chuyển". Playwright thông qua Node.js để gọi các phiên bản tương ứng.
* Câu lệnh chuyển đổi phiên bản: `nvm use <version_name>`

---

## 3. Lưu ý về Terminal
* **Windows:** Khuyên dùng **GitBash** để có trải nghiệm tốt nhất.
* **Phân biệt dấu gạch:**
    * `/` (Forward slash): Sử dụng trong hệ điều hành **Unix (Linux, macOS)**.
    * `\` (Backslash): Sử dụng trong **Windows**.

---

## 4. GIT: Hệ thống quản lý mã nguồn

### Kiểm tra cấu hình
1.  **Cấu hình Global:** `git config --global user.name`
2.  **Cấu hình đang áp dụng:** `git config user.name` (Kiểm tra Local trước, nếu không có mới kiểm tra Global).
3.  **Hiển thị nguồn file cấu hình:** `git config --list --show-origin`

### Thiết lập cấu hình
* **Mặc định (Global):**
    * `git config --global user.name "<name>"`
    * `git config --global user.email "<email>"`
    * `git config --global init.defaultBranch main`
* **Theo thư mục (Local):**
    * `git config user.name "<name>"`
    * `git config user.email "<email>"`

### Giải thích về RSA và SSH Key
> **RSA** là viết tắt tên của 3 nhà toán học/lập trình viên: **Ron Rivest**, **Adi Shamir** và **Leonard Adleman**.

* **id_rsa:** Khóa bí mật (Private key), tuyệt đối **không được chia sẻ**.
* **id_ed25519:** Phiên bản bảo mật hiện đại hơn RSA.
* **Public Key:** Khóa công khai dùng để liên kết với GitHub.
* **Lấy nội dung key:** `cat ~/.ssh/id_rsa.pub` (Trong đó `~` đại diện cho thư mục **Home**).

### Đưa Code lên GitHub
1.  **Khởi tạo Repository:** `git init`
2.  **Liên kết Remote:** `git remote add origin <url>`
    * *Origin* là tên định danh (có thể thay đổi nhưng khuyến khích giữ nguyên).
    * Mối quan hệ giữa Local và Remote Repo là **n-n**.
3.  **Thêm file vào Staging:**
    * Thêm tất cả: `git add .`
    * Thêm file cụ thể: `git add file1 file2`
4.  **Commit:** `git commit -m "nội dung commit"`
5.  **Push:** `git push origin main`

### Commit Convention
Cú pháp chuẩn: `<type>: <short_description>`
* **Chore:** Các thay đổi nhỏ (xóa file, đổi tên biến, sửa chính tả...).
* **Feat:** Thêm tính năng mới hoặc thêm test case.
* **Fix:** Sửa lỗi.
* **Lưu ý:** Không viết hoa `type`. Phải có dấu cách sau dấu `:`. Độ dài mô tả `< 50 ký tự`.

---

## 5. Phân loại Version Control System (VCS)
* **Local:** Lưu trữ tại máy cá nhân (Repository Local).
* **Centralized (Tập trung):** Lưu tại máy chủ tập trung. Nếu server sập sẽ không thể truy cập mã nguồn.
* **Distributed (Phân tán):** Lưu ở nhiều máy khác nhau. Mọi người có thể trao đổi code qua server nhưng mỗi máy đều giữ một bản sao đầy đủ.

---

## 6. So sánh Git vs GitHub
| Đặc điểm | Git | GitHub |
| :--- | :--- | :--- |
| **Bản chất** | Phần mềm, công cụ dòng lệnh (CLI). | Nền tảng Web, có giao diện người dùng (UI). |
| **Chức năng** | Quản lý phiên bản, đẩy file. | Lưu trữ dữ liệu mã nguồn trực tuyến. |

---

## 7. Git - Ba trạng thái (Three States)
1.  **Working Directory (Màu đỏ):** Vùng chứa các file mới hoặc file có thay đổi nhưng chưa được đánh dấu.
2.  **Staging Area (Màu xanh):** Nơi "xếp hàng" chuẩn bị cho commit.
    * `git add .`: Đưa toàn bộ thay đổi lên.
    * `git add file1 file2`: Đưa file cụ thể lên (nếu file không tồn tại sẽ báo lỗi ngay).
3.  **Repository (Màu tối):** Trạng thái sau khi chạy lệnh `commit`. Lúc này dữ liệu đã được lưu chính thức tại Local Repo (chưa lên GitHub).