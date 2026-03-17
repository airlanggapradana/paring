# 📦 Paring API Documentation

## 🔗 Base URL
```bash
{{BASE_URL}}
```

---

# 👤 USER

## ➕ Create New User
```http
POST /users
```
Membuat user baru dalam sistem. Endpoint ini biasanya digunakan sebagai entry point sebelum user memiliki role spesifik (misalnya nurse).

### Body
```json
{
  "email": "nayla@example.com",
  "passwordHash": "akunayla123",
  "fullName": "Nayla Saffana",
  "phoneNumber": "+628127381286",
  "role": "NURSE"
}
```

---

## 📄 Get All Users
```http
GET /users
```
Mengambil daftar semua user. Bisa difilter berdasarkan role atau nama untuk kebutuhan pencarian.

### Query Params (optional)
| Param | Type | Description |
|------|------|------------|
| role | string | Filter user berdasarkan role |
| name | string | Pencarian berdasarkan nama |

---

## 🔍 Get User By ID
```http
GET /users/:id
```
Mengambil detail satu user berdasarkan ID unik.

---

## ✏️ Update User
```http
PATCH /users/:id
```
Mengubah sebagian data user. Tidak semua field wajib dikirim (partial update).

### Body
```json
{
  "fullName": "Airlangga Pradana"
}
```

---

## ❌ Delete User
```http
DELETE /users/:id
```
Menghapus user dari sistem. Perlu diperhatikan apakah ada relasi (misalnya ke nurse atau appointment) sebelum melakukan delete.

---

# 🧑‍⚕️ NURSE

## ➕ Create Nurse
```http
POST /nurses
```
Membuat data nurse yang terhubung dengan user yang sudah ada. Artinya user harus sudah dibuat sebelumnya.

### Body
```json
{
  "userId": "851cb73f-eae4-45f6-b730-757c0a0fbeb7",
  "specialization": "Caregiver",
  "experienceYears": 4
}
```

---

## 📄 Get All Nurses
```http
GET /nurses
```
Mengambil daftar semua nurse. Bisa digunakan untuk pencarian berdasarkan spesialisasi atau pengalaman.

### Query Params (optional)
| Param | Type | Description |
|------|------|------------|
| name | string | Nama nurse |
| specialization | string | Spesialisasi |
| experienceYears | number | Tahun pengalaman |

---

## 🔍 Get Nurse By ID
```http
GET /nurses/:id
```
Mengambil detail satu nurse, termasuk relasi ke user jika tersedia.

---

## ✏️ Update Nurse
```http
PATCH /nurses/:id
```
Mengupdate informasi nurse seperti pengalaman atau spesialisasi.

### Body
```json
{
  "experienceYears": 5
}
```

---

## ❌ Delete Nurse
```http
DELETE /nurses/:id
```
Menghapus data nurse tanpa menghapus user terkait (kecuali di-handle khusus di backend).

---

# 🧑 PATIENT

## ➕ Create Patient
```http
POST /patients
```
Menambahkan pasien baru ke dalam sistem, biasanya terkait dengan sebuah family/group.

### Body
```json
{
  "familyId": "19ccf91c-e950-48ba-bab4-4b1a1f8402f6",
  "name": "Daniel Budianto",
  "dateOfBirth": "2004-10-23",
  "weight": 65,
  "height": 178,
  "medicalHistory": ["flu", "cold"]
}
```

---

## 📄 Get All Patients
```http
GET /patients
```
Mengambil seluruh data pasien dalam sistem.

---

## 🔍 Get Patient By ID
```http
GET /patients/:id
```
Mengambil detail satu pasien termasuk riwayat medis.

---

## ✏️ Update Patient
```http
PATCH /patients/:id
```
Mengubah data pasien seperti nama atau informasi lainnya.

### Body
```json
{
  "name": "Daniel Hartanto"
}
```

---

## ❌ Delete Patient
```http
DELETE /patients/:id
```
Menghapus data pasien dari sistem.

---

# 📅 APPOINTMENTS

## ➕ Create Appointment
```http
POST /appointments
```
Membuat janji temu antara pasien dan nurse. Biasanya mencakup jenis layanan dan waktu.

### Body
```json
{
  "patientId": "896f8e49-20e3-4718-855c-368cf66cea1a",
  "nurseId": "435cb24c-3a4f-400c-99b9-18884fe2db3a",
  "serviceType": "LIVE_IN",
  "serviceName": "NON_MEDIS",
  "totalPrice": 175000,
  "dueDate": "2026-03-19T12:00:00Z"
}
```

---

## 📄 Get All Appointments
```http
GET /appointments
```
Mengambil seluruh data appointment untuk monitoring atau dashboard.

---

## 🔍 Get Appointment By ID
```http
GET /appointments/:id
```
Mengambil detail satu appointment.

---

## ✏️ Update Appointment
```http
PATCH /appointments/:id
```
Mengupdate status atau detail appointment (misalnya konfirmasi).

### Body
```json
{
  "status": "CONFIRMED"
}
```

---

## ❌ Delete Appointment
```http
DELETE /appointments/:id
```
Menghapus appointment dari sistem.

---

# 📝 ACTIVITY LOG

## ➕ Create Log
```http
POST /activitylog
```
Menambahkan catatan aktivitas yang terkait dengan care log tertentu.

### Body
```json
{
  "careLogId": "1042a74f-5f72-4a97-8ae5-e9c74be525a1",
  "notes": "This is a test note"
}
```

---

## ✏️ Update Log
```http
PATCH /activitylog/:id
```
Mengubah isi catatan aktivitas.

### Body
```json
{
  "notes": "Updated activity log"
}
```

---

## ❌ Delete Log
```http
DELETE /activitylog/:id
```
Menghapus catatan aktivitas.

---

# 🔐 AUTH

## 🔑 Login
```http
POST /auth
```
Digunakan untuk autentikasi user dan mendapatkan akses ke sistem.

### Body
```json
{
  "email": "rangga@example.com",
  "password": "akugila123"
}
```

---

# 📋 CARELOG

## ➕ Create Carelog
```http
POST /carelog
```
Mencatat kondisi medis pasien dalam suatu appointment tertentu. Biasanya diisi oleh nurse.

### Body
```json
{
  "appointmentId": "b70bcf20-8ba9-4ee9-babf-c4fdd82cb24e",
  "patientId": "896f8e49-20e3-4718-855c-368cf66cea1a",
  "nurseId": "435cb24c-3a4f-400c-99b9-18884fe2db3a",
  "systolic": 120,
  "diastolic": 80,
  "bloodSugar": 75,
  "cholesterol": 125,
  "uricAcid": 86,
  "woundCondition": "masih ok",
  "moodScore": 4,
  "clinicalNotes": "anjay lu sehat brodi"
}
```
