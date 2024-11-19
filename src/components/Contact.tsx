"use client";
import React, { useState } from "react";

const defaultFormState = {
    name: {
        value: "",
        error: "",
    },
    email: {
        value: "",
        error: "",
    },
    message: {
        value: "",
        error: "",
    },
};

export const Contact = () => {
    const [formData, setFormData] = useState(defaultFormState);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let hasError = false;
        const updatedFormData = { ...formData };

        // Name validation
        if (!formData.name.value.trim()) {
            updatedFormData.name.error = "Name is required";
            hasError = true;
        } else {
            updatedFormData.name.error = "";
        }

        // Email validation
        if (!formData.email.value.trim()) {
            updatedFormData.email.error = "Email is required";
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email.value)) {
            updatedFormData.email.error = "Email is invalid";
            hasError = true;
        } else {
            updatedFormData.email.error = "";
        }

        // Message validation
        if (!formData.message.value.trim()) {
            updatedFormData.message.error = "Message is required";
            hasError = true;
        } else {
            updatedFormData.message.error = "";
        }

        if (hasError) {
            setFormData(updatedFormData);
            return;
        }

        // If no errors, proceed to submit
        submitForm();
    };

    const submitForm = async () => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.value,
                    email: formData.email.value,
                    message: formData.message.value,
                }),
            });

            if (response.ok) {
                // Clear the form and show success message
                setFormData(defaultFormState);
                alert("Thank you for your message!");
            } else {
                // Handle server errors
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between gap-5">
                {/* Name Input */}
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                        value={formData.name.value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                name: {
                                    value: e.target.value,
                                    error: "",
                                },
                                email: { ...formData.email },
                                message: { ...formData.message },
                            });
                        }}
                    />
                    {formData.name.error && (
                        <span className="text-red-500 text-sm">{formData.name.error}</span>
                    )}
                </div>

                {/* Email Input */}
                <div className="w-full">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                        value={formData.email.value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: {
                                    value: e.target.value,
                                    error: "",
                                },
                                name: { ...formData.name },
                                message: { ...formData.message },
                            });
                        }}
                    />
                    {formData.email.error && (
                        <span className="text-red-500 text-sm">{formData.email.error}</span>
                    )}
                </div>
            </div>

            {/* Message Input */}
            <div>
        <textarea
            placeholder="Your Message"
            rows={10}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.message.value}
            onChange={(e) => {
                setFormData({
                    ...formData,
                    message: {
                        value: e.target.value,
                        error: "",
                    },
                    name: { ...formData.name },
                    email: { ...formData.email },
                });
            }}
        />
                {formData.message.error && (
                    <span className="text-red-500 text-sm">{formData.message.error}</span>
                )}
            </div>

            {/* Submit Button */}
            <button
                className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};
