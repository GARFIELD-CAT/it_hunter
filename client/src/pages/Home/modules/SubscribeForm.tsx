import React from 'react';

export const SubscribeForm = () => (
  <div className="flex flex-col items-start gap-36 self-stretch p-12 rounded-3xl bg-white">
    <div className="flex flex-col items-start self-stretch text-neutral-950 text-[2.5rem] leading-[44px]">
      Оставайся в курсе
    </div>
    <div className="flex items-end justify-between self-stretch">
      <div className="flex flex-col items-start w-[21.0625rem] text-[#6a6a6a] text-[1.0625rem] leading-[1.6875rem]">
        Наверно единственная рассылка, которая не раздражает.
      </div>
      <div className="flex flex-col items-start gap-3 w-[444.05px]">
        <div className="flex items-start self-stretch">
          <input
            type="text"
            className="placeholder:text-[#adadad] text-[.9375rem] leading-[normal]rounded-md border-[1px] border-solid border-[#ADADAD] flex h-[3rem] px-[1.3125rem] py-[0.9375rem] flex-col items-start flex-[1_0_0] rounded-[0.375rem] focus:outline-none"
            placeholder="Введите email"
          />
          <div className="flex flex-col items-start pl-3 h-12">
            <div className="flex flex-shrink-0 justify-center items-center py-3 px-6 h-12 rounded-md bg-[#f3f3f3] text-neutral-950 text-center leading-6">
              Подписаться
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch text-[#adadad] text-[.8125rem] leading-[1.3125rem]">
          Нажимая на кнопку «Подписаться» вы соглашаетесь на обработку
          персональных данных.
        </div>
      </div>
    </div>
  </div>
);
