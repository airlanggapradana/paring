import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

async function testAuth() {
  console.log("🧪 Testing Authentication API Endpoints\n");

  try {
    // Test 1: Register
    console.log("1️⃣  Testing Register Endpoint...");
    const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
      email: "testuser@paring.com",
      password: "TestUser@123",
      name: "Test User",
      phone: "+62812345700",
      role: "PATIENT",
    });

    const { token: registerToken, user } = registerResponse.data.data;
    console.log("✅ Register successful");
    console.log(`   User ID: ${user.id}`);
    console.log(`   Token: ${registerToken.substring(0, 20)}...`);

    // Test 2: Login
    console.log("\n2️⃣  Testing Login Endpoint...");
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: "testuser@paring.com",
      password: "TestUser@123",
    });

    const { token: loginToken } = loginResponse.data.data;
    console.log("✅ Login successful");
    console.log(`   Token: ${loginToken.substring(0, 20)}...`);

    // Test 3: Verify Token
    console.log("\n3️⃣  Testing Verify Endpoint...");
    const verifyResponse = await axios.get(`${BASE_URL}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });

    console.log("✅ Token verification successful");
    console.log(`   Authenticated: ${verifyResponse.data.authenticated}`);

    // Test 4: Get Profile
    console.log("\n4️⃣  Testing Get Profile Endpoint...");
    const profileResponse = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });

    const profile = profileResponse.data.data;
    console.log("✅ Profile retrieved successfully");
    console.log(`   Name: ${profile.name}`);
    console.log(`   Email: ${profile.email}`);
    console.log(`   Role: ${profile.role}`);

    // Test 5: Login with existing user
    console.log("\n5️⃣  Testing Login with Existing User...");
    const existingLoginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: "admin@paring.com",
      password: "Admin@123",
    });

    console.log("✅ Existing user login successful");
    console.log(`   User: admin@paring.com`);

    // Test 6: Invalid credentials
    console.log("\n6️⃣  Testing Invalid Credentials...");
    try {
      await axios.post(`${BASE_URL}/auth/login`, {
        email: "admin@paring.com",
        password: "WrongPassword123",
      });
    } catch (error: any) {
      if (error.response?.status === 401) {
        console.log("✅ Correctly rejected invalid credentials");
      }
    }

    // Test 7: Logout
    console.log("\n7️⃣  Testing Logout Endpoint...");
    const logoutResponse = await axios.post(`${BASE_URL}/auth/logout`);
    console.log("✅ Logout successful");

    console.log("\n✅ All authentication tests passed!");
  } catch (error: any) {
    console.error("❌ Test failed:", error.response?.data?.message || error.message);
    process.exit(1);
  }
}

testAuth();
