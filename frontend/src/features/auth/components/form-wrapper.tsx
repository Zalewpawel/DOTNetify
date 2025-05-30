import { Card } from '../ui/card';

export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<Card>{children}</Card>
			</div>
		</main>
	);
};
