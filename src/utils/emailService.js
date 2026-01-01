// Email Service Utility
// Uses Web3Forms for free email delivery (no backend required)
// Get your free access key at: https://web3forms.com/

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your Web3Forms key

/**
 * Sends contact form data via Web3Forms
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - The message content
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendContactEmail = async (formData) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                name: formData.name,
                email: formData.email,
                message: formData.message,
                subject: `Portfolio Contact: ${formData.name}`,
                from_name: "Portfolio Contact Form",
            }),
        });

        const result = await response.json();

        if (result.success) {
            return {
                success: true,
                message: "Message sent successfully! I'll get back to you soon.",
            };
        } else {
            throw new Error(result.message || "Failed to send message");
        }
    } catch (error) {
        console.error("Email send error:", error);
        return {
            success: false,
            message: "Failed to send message. Please try emailing directly.",
        };
    }
};

/**
 * Fallback: Opens mailto link if Web3Forms fails
 * @param {Object} formData - The form data
 */
export const openMailtoFallback = (formData) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:Yuvrajva09@gmail.com?subject=${subject}&body=${body}`);
};
