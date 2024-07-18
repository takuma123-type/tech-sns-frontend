import React from 'react'
import { Link } from 'react-router-dom'

export const FooterMenu = () => {
  return (
    <>
                          <div className="flex justify-center">
                      <div className="flex items-center mb-4">
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-[12px] font-medium text-textGrayLight"
                        >
                          <Link
                            to="/"
                            className="text-blue-500 font-bold"
                          >
                            利用規約
                          </Link>
                          および
                          <Link
                            to="/"
                            className="text-blue-500 font-bold"
                          >
                            プライバシーポリシー
                          </Link>
                          に同意の上、ログインへお進みください。
                        </label>
                      </div>
                    </div>
                    <div className="text-right">
                      <Link
                        to="/"
                        className="text-blue-500 font-bold"
                      >
                        ログインはこちら
                      </Link>
                    </div>
                    <div className="text-right">
                      <Link
                        to="/"
                        className="text-blue-500 font-bold"
                      >
                        パスワードをお忘れの方はこちら
                      </Link>
                    </div>
    </>
  )
}
