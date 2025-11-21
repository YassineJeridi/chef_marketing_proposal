export const sendToTelegram = async (formData) => {
    const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const message = `
🎯 *New Marketing Proposal Inquiry*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

💬 *Message:*
${formData.message}

⏰ *Received:* ${new Date().toLocaleString()}
  `;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            }
        );

        const data = await response.json();

        if (!data.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        return { success: true, data };
    } catch (error) {
        console.error('Telegram Error:', error);
        return { success: false, error: error.message };
    }
};
