import React, { useState } from "react";
import IconHeader from "../organism/IconHeader";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../organism/Footer";
import BackButton from "../atoms/BackButton";
import MobileFooter from "../organism/MobileFooter";
import { SessionsRepository } from "../../infrastructure/repository/SessionsRepository";
import { LogInUsecase, LogInInput } from "../../usecase/LogInUsecase";
import { useAuth } from "../../hooks/useAuth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogIn = async () => {
    const input = new LogInInput({ email, password });
    const sessionRepository = new SessionsRepository();
    const usecase = new LogInUsecase(input, sessionRepository);

    try {
      const output = await usecase.log_in();
      console.log("LogInUsecase output:", output);
      const token = output.token;
      if (token) {
        sessionStorage.setItem('authToken', token);
        login(token); // トークンを引数としてlogin関数を呼び出す
        console.log("トークンが保存されました:", token);
        navigate("/");
      } else {
        console.error("トークンが取得できませんでした");
      }
    } catch (error) {
      console.error("ログイン失敗:", error);
    }
  };

  return (
    <React.Fragment>
      <IconHeader />
      <>
        <BackButton />
        <div className="flex flex-col min-h-screen pt-16"> 
          <div className="w-11/12 sm:w-full mx-auto bg-white rounded-lg shadow sm:max-w-md sm:overflow-hidden sm:h-auto">
            <div className="px-4 py-8 sm:px-12">
              <div className="flex justify-center">
                <img className="w-1/3" src="/images/soeur_logo.png" alt="" />
              </div>
              <div className="flex justify-center">
                <div className="text-center text-xl font-bold ml-4">
                  ログイン
                </div>
              </div>
              <form>
                <div className="mt-6">
                  <div className="w-full space-y-6">
                    <div className="w-full">
                      <div className="relative">
                        <div className="text-gray-700 text-xs font-bold">
                          メールアドレス
                        </div>
                        <input
                          type="text"
                          id="email"
                          className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
                          placeholder="メールアドレス"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative">
                        <div className="text-gray-700 text-xs font-bold">
                          パスワード
                        </div>
                        <input
                          type="password"
                          id="password"
                          className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
                          placeholder="パスワード"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="justify-center text-center">
                      <button
                        type="button"
                        className="flex justify-center mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleLogIn}
                      >
                        ログイン
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex items-center mb-4">
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-[12px] font-medium text-textGrayLight"
                        >
                          <Link to="/" className="text-blue-500 font-bold">
                            利用規約
                          </Link>
                          および
                          <Link to="/" className="text-blue-500 font-bold">
                            プライバシーポリシー
                          </Link>
                          に同意の上、ログインへお進みください。
                        </label>
                      </div>
                    </div>
                    <div className="text-right">
                      <Link to="/sign-up" className="text-blue-500 font-bold">
                        新規登録はこちら
                      </Link>
                    </div>
                    <div className="text-right">
                      <Link to="/" className="text-blue-500 font-bold">
                        パスワードをお忘れの方はこちら
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
      <Footer />
      <MobileFooter />
    </React.Fragment>
  );
}
