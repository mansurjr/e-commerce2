import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api";

const AccDetail = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch((err) => {
        const msg = err?.response?.data?.message ?? "Failed to load profile";

        if (msg.toLowerCase().includes("token expired")) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        } else {
          setError(msg);
        }
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (error) return <div className="text-red-500">{error}</div>;

  if (loading) {
    return (
      <div className="w-[400px] animate-pulse">
        <div className="text-center py-8">
          <div className="h-8 w-40 bg-gray-300 rounded mx-auto mb-6"></div>
        </div>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="py-3 px-4">
              <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
            </div>
          ))}
      </div>
    );
  }

  // 🔹 Profile UI
  return (
    <div className="w-[400px]">
      <div className="flex-1 lg:mr-[79px]">
        <div className="space-y-8">
          <div>
            <div className="p-4 space-y-4 text-left">
              <div className="text-center py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  My Account
                </h1>
              </div>

              <div className="py-[7px] px-[16px]">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  First Name *
                </p>
                <p className="text-foreground break-words">{user.firstName}</p>
              </div>

              <div className="py-[7px] px-[16px]">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Last Name *
                </p>
                <p className="text-foreground break-words">{user.lastName}</p>
              </div>

              <div className="py-[7px] px-[16px]">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Username *
                </p>
                <p className="text-foreground break-words">{user.username}</p>
              </div>

              <div className="py-[7px] px-[16px]">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Email *
                </p>
                <p className="text-foreground break-words">{user.email}</p>
              </div>

              <div className="py-[7px] px-[16px]">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Phone number
                </p>
                <p className="text-foreground break-words">{user.phone}</p>
              </div>

              <div className="py-[7px] px-[16px]">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Birthdate
                </p>
                <p className="text-foreground break-words">{user.birthDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AccDetail);
