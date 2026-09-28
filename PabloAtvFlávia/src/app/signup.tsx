import React, { useState } from "react";
import { 
  Image, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  StyleSheet,
  Alert
} from "react-native";
import { Link } from "expo-router";
import { Button } from "@/src/app/components/button";
import { Input } from "@/src/app/components/input";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignUp() {
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      return Alert.alert("Erro", "Preencha todos os campos para se cadastrar.");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Erro", "As senhas não coincidem.");
    }

    Alert.alert("Sucesso", "Conta criada com sucesso!");
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image 
            source={require("@/src/app/assets/castaldi.jpg")} 
            style={styles.illustration} 
          />

          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>Crie sua conta.</Text>

          <View style={styles.form}>
            <Input 
              placeholder="Nome" 
              value={name}
              onChangeText={setName}
            />
            
            <Input 
              placeholder="E-mail" 
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail} 
            />
            
            <Input 
              placeholder="Senha" 
              secureTextEntry
              value={password}
              onChangeText={setPassword} 
            />
            
            <Input 
              placeholder="Confirmar senha" 
              secureTextEntry 
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            
            <Button label="Cadastrar" onPress={handleSignUp} />
          </View>

          <Text style={styles.footerText}>
            Já tem uma conta?{" "}
            <Link href="/" style={styles.footerLink}>
              Entre aqui.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
  },
  illustration: {
    width: "15%",   
    height: 100,    
  },
  form: {
    width: "100%",
    marginTop: 30,  
    gap: 24,        
  },
  footerText: {
    textAlign: "center", 
    marginTop: 24,       
    color: "#000000",    
  },
  footerLink: {
    color: "#0A1172",    
    fontWeight: "700",   
  },
});
