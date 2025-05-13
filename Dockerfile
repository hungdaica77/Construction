# Giai đoạn 1: Build ứng dụng React
FROM node:22-alpine AS build

# Tạo thư mục app
WORKDIR /app

# Copy package trước để cache cài đặt npm
COPY package*.json ./

# Cài đặt dependency
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Build ứng dụng (sinh ra thư mục build hoặc dist)
RUN npm run build

# Giai đoạn 2: Serve bằng nginx
FROM nginx:stable-alpine

# Xóa file mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy build/dist từ giai đoạn trước sang nginx
COPY --from=build /app/dist/public/ /usr/share/nginx/html

# (Nếu bạn dùng React Router, cần file cấu hình NGINX)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose cổng
EXPOSE 80

# Chạy nginx
CMD ["nginx", "-g", "daemon off;"]
