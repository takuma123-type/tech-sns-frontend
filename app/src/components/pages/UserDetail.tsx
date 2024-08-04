import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetUserDetailUsecase } from '../../usecase/GetUserDetailUsecase';
import { UsersRepository } from '../../infrastructure/repository/UsersRepository';
import { UserDetailItem } from '../../models/presentation/UserDetailItem';
import IconHeader from '../organism/IconHeader';
import MobileFooter from "../organism/MobileFooter";

const UserDetail = () => {
  const { code } = useParams<{ code: string }>();
  const [user, setUser] = useState<UserDetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      const usersRepository = new UsersRepository();
      const getUserDetailUsecase = new GetUserDetailUsecase(usersRepository);

      try {
        const output = await getUserDetailUsecase.get();
        setUser(output.user);
      } catch (error) {
        setError('Failed to fetch user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [code]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <IconHeader />
      <div className="flex flex-col min-h-screen pt-16"> {/* アイコンヘッダーの高さ分だけパディングを追加 */}
        <div className="flex flex-1 items-center justify-center"> {/* コンテンツを中央に配置 */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.avatar_url || "/docs/images/people/profile-picture-3.jpg"} alt={user?.name || "User image"} />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.name || "User Name"}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">{user?.description || "User Description"}</span>
            </div>
          </div>
        </div>
        <MobileFooter />
      </div>
    </>
  );
};

export default UserDetail;
