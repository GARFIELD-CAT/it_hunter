import { useState } from "react";
import {
  useFloating,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  useId,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useResponseVacancyQuery } from "@/services/queries/responseVacancy.query";

export function ResponseModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [success, setSuccess] = useState(false);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  const { mutateAsync: responseVacancy, isLoading } = useResponseVacancyQuery();

  const handleSubmit = async () => {
    const result = await responseVacancy();
    if (result) {
      setSuccess(true);
    }
  };

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss,
  ]);

  const headingId = useId();
  const descriptionId = useId();

  return (
    <>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay className="bg-neutral-800 opacity-80" lockScroll>
            <FloatingFocusManager context={context}>
              <div
                className="m-auto mt-60 rounded bg-white max-h-max max-w-max flex gap-6 flex-col justify-center items-center py-6 px-8 "
                ref={refs.setFloating}
                aria-labelledby={headingId}
                aria-describedby={descriptionId}
                {...getFloatingProps()}
              >
                {isLoading && !success && (
                  <div className="flex justify-center items-center">
                    <div className="m-12 animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-950"></div>
                  </div>
                )}
                {!isLoading && !success && (
                  <>
                    <div
                      className="text-xl font-medium text-center"
                      id={headingId}
                    >
                      Загрузите файл с резюме
                    </div>
                    <form
                      className="flex flex-col justify-center items-center "
                      encType="multipart/form-data"
                    >
                      <input
                        className="text-xs text-center"
                        type="file"
                        id="file"
                        name="file"
                        multiple
                      />
                      <div className="text-xs text-center" id={descriptionId}>
                        *.pdf, .doc
                      </div>
                      <div className="mt-8 flex flex-row gap-12 justify-center items-center text-m font-medium text-center">
                        <button
                          type="button"
                          onClick={() => handleSubmit()}
                          className="bg-black text-white w-32 p-3  rounded-md"
                        >
                          Отправить
                        </button>
                        <button
                          type="button"
                          className="bg-black text-white  w-32 p-3  rounded-md"
                          onClick={() => onClose()}
                        >
                          Отмена
                        </button>
                      </div>
                    </form>
                  </>
                )}
                {!isLoading && success && (
                  <>
                    <div
                      className="text-xl font-medium text-center"
                      id={headingId}
                    >
                      Резюме успешно загружено
                    </div>
                    <button
                      className="bg-black text-white  w-32 p-3  rounded-md"
                      onClick={() => {
                        setSuccess(false);
                        onClose();
                      }}
                    >
                      Отлично
                    </button>
                  </>
                )}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
}
