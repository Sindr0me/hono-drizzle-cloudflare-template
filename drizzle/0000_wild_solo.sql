CREATE TABLE `users` (
	`id` text,
	`text_modifiers` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`int_modifiers` integer DEFAULT false NOT NULL
);
