"use client";
import { Button, Container, TextField, Box, Typography } from "@mui/material";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const {user, login} = useAuth();

  // ログイン済みの場合は自動的にダッシュボードにリダイレクト
  useEffect(() => {
    console.log("User:", user);
    console.log("Router object:", router);
    if (user) {
      router.push("/admin")
    }
  }, [user, router])

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if(success) {
      router.push("/admin");
    } else {
      setError("ユーザー名またはパスワードが間違っています");
    }
  }
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography variant="h4" component="h1">NEWS</Typography>
          <Typography variant="h5" component="h2">ログイン</Typography>
          <Typography variant="body1">ログインしてください(管理画面に遷移)</Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 2 }}>
            <TextField
              fullWidth
              label="ユーザー名"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="パスワード"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              disableElevation
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              ログイン
            </Button>
          </Box>
        </Box>

      </Box>
    </Container>
  )
}
