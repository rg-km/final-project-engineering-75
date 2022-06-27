# server-side

## Requirements

- User bisa melakukan register akun
- User/admin bisa login ke halaman
- User bisa melihat, menulis, dan filter jurnal
- User bisa melihat notifikasi dan filter berdasarkan status
- Admin bisa melihat dan manajemen laporan jurnal

## Available APIs

- `POST`: `/api/user/register`
- `POST`: `/api/user/login`
- `GET`: `/api/journal/list`
- `POST`: `/api/journal/detail`
- `POST`: `/api/journal/create`
- `POST`: `/api/admin/dashboard`
- `POST`: `/api/admin/journal/detail`
- `POST`: `/api/admin/journal/update`
- `GET`: `/api/account/profile`
- `GET`: `/api/notification`
