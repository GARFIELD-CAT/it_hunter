import Button from "@/components/Button";
import clsx from "clsx";

export const AddCompanyForm = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      "flex flex-col items-start gap-20 self-stretch p-12 rounded-3xl bg-neutral-950",
      className
    )}
  >
    <div className="flex items-start self-stretch">
      <div className="flex flex-col items-start gap-3 self-stretch w-[31.6875rem]">
        <div className="flex flex-col items-start self-stretch text-white text-6xl leading-[4.125rem]">
          Не хватает вашей компании?
        </div>
        <div className="flex flex-col items-start self-stretch text-[#ccc] text-[1.0625rem] leading-[1.6875rem]">
          Создайте карьерную страницу и привлекайте больше талантливых
          специалистов.
        </div>
      </div>
      <div className="flex items-end self-stretch  pb-[3.5rem]">
        <svg
          className="w-[18.8125rem] h-[3.08038rem]"
          width="322"
          height="63"
          viewBox="0 0 322 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999989 24L40.8206 12.851C129.24 -11.906 223.99 1.57098 302 50"
            stroke="#FAFAFA"
            stroke-width="1.10644"
            stroke-linecap="round"
            stroke-dasharray="2.21 5.53"
          />
          <path
            d="M320.382 61.0319C320.594 61.4009 320.326 61.8609 319.9 61.8599L312.234 61.8289C311.808 61.8269 311.544 61.3649 311.758 60.9969L315.618 54.3739C315.832 54.0059 316.365 54.0079 316.576 54.3779L320.382 61.0319Z"
            fill="#FAFAFA"
            stroke="#FAFAFA"
            stroke-width="1.10644"
          />
        </svg>
      </div>
    </div>
    <div className="flex flex-col items-start gap-3 self-stretch">
      <div className="flex items-start self-stretch gap-3">
        <input
          type="email"
          className="flex flex-col items-start pt-[0.9375rem] pb-[0.9375rem] pl-[1.3125rem] pr-[1.3125rem] flex-1 h-12 rounded-md border border-[#adadad] bg-transparent text-white focus:outline outline-2 outline-white outline-offset-2"
          placeholder="Email"
        />
        <input
          type="company"
          className="flex flex-col items-start pt-[0.9375rem] pb-[0.9375rem] pl-[1.3125rem] pr-[1.3125rem] flex-1 h-12 rounded-md border border-[#adadad] bg-transparent text-white focus:outline outline-2 outline-white outline-offset-2"
          placeholder="Название компании"
        />
        <Button
          className="!bg-[#f3f3f3] !text-neutral-950"
          text="Получить презентацию"
        />
      </div>
      <div className="flex flex-col items-start self-stretch text-[#adadad] text-[.8125rem] leading-[1.3125rem]">
        Нажимая на кнопку «Получить презентацию» вы соглашаетесь на обработку
        персональных данных.
      </div>
    </div>
  </div>
);
