# Hướng dẫn deploy frontend lên Vercel (chi tiết)

Mục tiêu: import project từ GitHub và deploy frontend (folder `frontend`) lên Vercel, hoặc sử dụng GitHub Actions để build + gọi Vercel Action.

1) Chuẩn bị trên GitHub
- Đảm bảo bạn đã push code lên `minhkhanh2412/MaNguonMo` và `frontend` có `package.json` với script `build`.

2) Import nhanh trên Vercel (khuyến nghị)
- Mở https://vercel.com và đăng nhập.
- Chọn **New Project** → **Import Git Repository** → chọn GitHub account của bạn.
- Chọn repo `MaNguonMo` → Click **Import**.
- Cấu hình cho project:
  - Root Directory: `frontend`
  - Framework Preset: Vite (nếu được chọn)
  - Install Command: `npm ci`
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Click **Deploy**. Chờ build hoàn tất và nhận URL.

3) Thêm biến môi trường trên Vercel (nếu cần)
- Vercel → Project → Settings → Environment Variables → Add
- Ví dụ: `VITE_API_URL` = `https://your-backend.example.com`

4) Sử dụng GitHub Actions (cách thay thế)
- Nếu bạn muốn deploy thông qua GH Actions, dùng file `.github/workflows/deploy-frontend-vercel.yml` (đã thêm vào repo).
- Tạo các secret trên GitHub repo: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

  - Tạo token:
    - Vercel → Account Settings → Tokens → Create New Token → copy.

  - Lấy `PROJECT_ID` và `ORG_ID`:
    - Vercel → Project → Settings → General → Project ID.
    - Vercel Team/Account Settings → General → ID (Org ID).

- Thêm vào GitHub: Repo → Settings → Secrets and variables → Actions → New repository secret.

5) Kiểm tra & debug
- Vercel Dashboard → Project → Deployments → xem logs build.
- Nếu lỗi build: xem logs, sửa code, push lại.

6) Ghi kết quả nộp bài
- Lưu URL deployed, chụp màn hình logs, cập nhật `README.md` với hướng dẫn chạy local và URL.
