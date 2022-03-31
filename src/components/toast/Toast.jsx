import "./toast.css";

export const Toast = () => {
  const { message, type } = useToast();
  return type === "success" ? (
    <div class="alert alert-success">✅ {message}</div>
  ) : (
    <div class="alert alert-danger">❌ {message}</div>
  );
};