import Link from 'next/link';
import { useState, useEffect, useRef, useId, ReactNode, ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import cn from 'clsx';
import { InputForm } from './input-form';
import { Button } from './button';

type InputProps = {
    modal?: boolean;
    reply?: boolean;
    parent?: { id: string; username: string };
    disabled?: boolean;
    children?: ReactNode;
    replyModal?: boolean;
    closeModal?: () => void;
};

export const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
};

export function Input({
    modal,
    reply,
    parent,
    disabled,
    children,
    replyModal,
    closeModal
}: InputProps): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [visited, setVisited] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const formId = useId();

    const handleChange = ({
        target: { value }
    }: ChangeEvent<HTMLTextAreaElement>): void => setInputValue(value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    const handleFocus = (): void => setVisited(!loading);

    const sendTweet = async (): Promise<void> => {
        alert("send tweet")
    }

    const discardTweet = (): void => {
        setInputValue('');
        setVisited(false);

        inputRef.current?.blur();
    };

    return (
        <form
            className={cn('flex flex-col', {
                '-mx-4': reply,
                'gap-2': replyModal,
                'cursor-not-allowed': disabled
            })}
            onSubmit={handleSubmit}
        >
            {loading && (
                <motion.i className='h-1 animate-pulse bg-main-accent' {...variants} />
            )}
            {children}
            <label
                className={cn(
                    'hover-animation grid w-full grid-cols-[auto,1fr] gap-3 px-4 py-3',
                    reply
                        ? 'pt-3 pb-1'
                        : replyModal
                            ? 'pt-0'
                            : 'border-b-2 border-light-border dark:border-dark-border',
                    (disabled || loading) && 'pointer-events-none opacity-50'
                )}
                htmlFor={formId}
            >
                <div className='flex w-full flex-col gap-4'>
                    <InputForm
                        modal={modal}
                        reply={reply}
                        formId={formId}
                        visited={visited}
                        loading={loading}
                        inputRef={inputRef}
                        replyModal={replyModal}
                        inputValue={inputValue}
                        isValidTweet={true}
                        sendTweet={sendTweet}
                        handleFocus={handleFocus}
                        handleChange={handleChange}
                        discardTweet={discardTweet}>
                        <Button
                            type='submit'
                            className='accent-tab bg-main-accent px-4 py-1.5 font-bold text-white
                     enabled:hover:bg-main-accent/90
                     enabled:active:bg-main-accent/75'
                            disabled={false}
                        >
                            {'Tweet'}
                        </Button>
                    </InputForm>
                </div>
            </label>
        </form>
    );
}