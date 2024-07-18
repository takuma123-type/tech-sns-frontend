import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IconHeader from "../organism/IconHeader";
import MobileFooter from "../organism/MobileFooter";
import '../../styles/Profile.css';

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Profile() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <IconHeader />
        <div className="profile-container">
          <div className="profile-content">
            <ul className="divide-y divide-gray-200">
              <Link to="/og_profile_details">
                <li className="flex items-center py-4 px-6">
                  <div className="w-10 h-10 opacity-5 bg-teal-450 rounded-full">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98712 11.7886C3.7641 11.7886 1.01172 12.2759 1.01172 14.2275C1.01172 16.1791 3.74664 16.6838 6.98712 16.6838C10.2101 16.6838 12.9617 16.1957 12.9617 14.2449C12.9617 12.2941 10.2276 11.7886 6.98712 11.7886Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98643 9.00498C9.10151 9.00498 10.8158 7.2899 10.8158 5.17482C10.8158 3.05974 9.10151 1.34546 6.98643 1.34546C4.87135 1.34546 3.15627 3.05974 3.15627 5.17482C3.14913 7.28276 4.8523 8.99784 6.95945 9.00498H6.98643Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg ml-2.5 font-medium text-gray-800">
                      プロフィール詳細
                    </h3>
                  </div>
                  <div>
                    <span className="text-gray-300 text-xs font-medium font-['DM Sans'] leading-tight">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z"
                          fill="#ABABAB"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/update_og_profile">
                <li className="flex items-center py-4 px-6">
                  <div className="w-10 h-10 opacity-5 bg-teal-450 rounded-full">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98712 11.7886C3.7641 11.7886 1.01172 12.2759 1.01172 14.2275C1.01172 16.1791 3.74664 16.6838 6.98712 16.6838C10.2101 16.6838 12.9617 16.1957 12.9617 14.2449C12.9617 12.2941 10.2276 11.7886 6.98712 11.7886Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98643 9.00498C9.10151 9.00498 10.8158 7.2899 10.8158 5.17482C10.8158 3.05974 9.10151 1.34546 6.98643 1.34546C4.87135 1.34546 3.15627 3.05974 3.15627 5.17482C3.14913 7.28276 4.8523 8.99784 6.95945 9.00498H6.98643Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg ml-2.5 font-medium text-gray-800">
                      プロフィール編集
                    </h3>
                  </div>
                  <div>
                    <span className="text-gray-300 text-xs font-medium font-['DM Sans'] leading-tight">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z"
                          fill="#ABABAB"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/profile/password-change">
                <li className="flex items-center py-4 px-6">
                  <div className="w-10 h-10 opacity-5 bg-teal-450 rounded-full">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98712 11.7886C3.7641 11.7886 1.01172 12.2759 1.01172 14.2275C1.01172 16.1791 3.74664 16.6838 6.98712 16.6838C10.2101 16.6838 12.9617 16.1957 12.9617 14.2449C12.9617 12.2941 10.2276 11.7886 6.98712 11.7886Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98643 9.00498C9.10151 9.00498 10.8158 7.2899 10.8158 5.17482C10.8158 3.05974 9.10151 1.34546 6.98643 1.34546C4.87135 1.34546 3.15627 3.05974 3.15627 5.17482C3.14913 7.28276 4.8523 8.99784 6.95945 9.00498H6.98643Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg ml-2.5 font-medium text-gray-800">
                      パスワード変更
                    </h3>
                  </div>
                  <div>
                    <span className="text-gray-300 text-xs font-medium font-['DM Sans'] leading-tight">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z"
                          fill="#ABABAB"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/profile/unsubscribe">
                <li className="flex items-center py-4 px-6">
                  <div className="w-10 h-10 opacity-5 bg-teal-450 rounded-full">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98712 11.7886C3.7641 11.7886 1.01172 12.2759 1.01172 14.2275C1.01172 16.1791 3.74664 16.6838 6.98712 16.6838C10.2101 16.6838 12.9617 16.1957 12.9617 14.2449C12.9617 12.2941 10.2276 11.7886 6.98712 11.7886Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98643 9.00498C9.10151 9.00498 10.8158 7.2899 10.8158 5.17482C10.8158 3.05974 9.10151 1.34546 6.98643 1.34546C4.87135 1.34546 3.15627 3.05974 3.15627 5.17482C3.14913 7.28276 4.8523 8.99784 6.95945 9.00498H6.98643Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg ml-2.5 font-medium text-gray-800">
                      退会申請
                    </h3>
                  </div>
                  <div>
                    <span className="text-gray-300 text-xs font-medium font-['DM Sans'] leading-tight">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z"
                          fill="#ABABAB"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/loguot">
                <li className="flex items-center py-4 px-6">
                  <div className="w-10 h-10 opacity-5 bg-teal-450 rounded-full">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98712 11.7886C3.7641 11.7886 1.01172 12.2759 1.01172 14.2275C1.01172 16.1791 3.74664 16.6838 6.98712 16.6838C10.2101 16.6838 12.9617 16.1957 12.9617 14.2449C12.9617 12.2941 10.2276 11.7886 6.98712 11.7886Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98643 9.00498C9.10151 9.00498 10.8158 7.2899 10.8158 5.17482C10.8158 3.05974 9.10151 1.34546 6.98643 1.34546C4.87135 1.34546 3.15627 3.05974 3.15627 5.17482C3.14913 7.28276 4.8523 8.99784 6.95945 9.00498H6.98643Z"
                        stroke="#77C9D4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#77C9D4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg ml-2.5 font-medium text-gray-800">
                      ログアウト
                    </h3>
                  </div>
                  <div>
                    <span className="text-gray-300 text-xs font-medium font-['DM Sans'] leading-tight">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.06641 11.8398C1.3584 11.8398 1.59326 11.7383 1.79639 11.5352L6.57617 6.87598C6.84912 6.60303 6.96973 6.33643 6.97607 6C6.97607 5.66992 6.84912 5.39062 6.57617 5.12402L1.80273 0.458496C1.59326 0.261719 1.35205 0.160156 1.06641 0.160156C0.482422 0.160156 0 0.629883 0 1.21387C0 1.50586 0.126953 1.77246 0.342773 1.99463L4.48779 6.00635L0.342773 10.0054C0.120605 10.2275 0 10.4941 0 10.7861C0 11.3638 0.482422 11.8398 1.06641 11.8398Z"
                          fill="#ABABAB"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      <MobileFooter />
      </>
    </React.Fragment>
  );
}