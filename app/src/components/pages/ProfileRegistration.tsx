import React, { useState } from "react";
import IconHeader from "../organism/IconHeader";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../organism/Footer";
import BackButton from "../atoms/BackButton";
import { UpdateProfileInput, UpdateProfileUsecase } from "../../usecase/UpdateProfileUsecase";
import { SessionsRepository } from "../../infrastructure/repository/SessionsRepository";

export default function ProfileRegistration() {
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    const input = new UpdateProfileInput({ name, avatar: avatarFile, description });
    const sessionsRepository = new SessionsRepository();
    const updateProfileUsecase = new UpdateProfileUsecase(input, sessionsRepository);

    try {
      const result = await updateProfileUsecase.update_profile();
      const token = result.token; // プロフィール更新成功時のトークンを取得
      localStorage.setItem("authToken", token); // トークンをローカルストレージに保存
      alert("プロフィールの更新に成功しました！");
      navigate("/"); // プロフィール画面に遷移
    } catch (error) {
      alert("プロフィールの更新に失敗しました。再度お試しください。");
      console.error(error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatarFile(event.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <IconHeader />
      <>
        <BackButton />
        <div className="flex items-center justify-center sm:mt-0 sm:mb-0">
          <div className="w-11/12 sm:w-full mx-auto bg-white rounded-lg shadow sm:max-w-md sm:overflow-hidden sm:h-auto">
            <div className="px-4 py-8 sm:px-12">
              <div className="flex justify-center">
                <img className="w-1/3" src="/images/soeur_logo.png" alt="" />
              </div>
              <div className="flex justifycenter">
                <div className="text-center text-xl font-bold ml-4">
                  プロフィール更新
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mt-6">
                  <div className="w-full space-y-6">
                    <div className="w-full">
                      <div className="relative">
                        <div className="text-gray-700 text-xs font-bold">
                          名前
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
                          placeholder="名前"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative">
                        <div className="text-gray-700 text-xs font-bold">
                          アバター
                        </div>
                        <input
                          type="file"
                          id="avatarFile"
                          className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative">
                        <div className="text-gray-700 text-xs font-bold">
                          説明
                        </div>
                        <textarea
                          id="description"
                          className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
                          placeholder="説明"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="justify-center text-center">
                      <button
                        type="button"
                        className="flex justify-center mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleUpdateProfile}
                      >
                        更新
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </React.Fragment>
  );
}
