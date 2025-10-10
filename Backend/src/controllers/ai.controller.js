import generateContent from '../services/ai.service.js'
const aiServices = generateContent;

// Correct parameter order: (req, res)
const aiResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).send('Prompt is required');
    }

    try {
        const response = await aiServices(prompt);
        return res.send(response);
    } catch (err) {
        // Log error server-side and return a 500 with a concise message
        console.error('AI service error:', err?.message || err);
        return res.status(500).send({ error: 'AI service error', message: err?.message || String(err) });
    }
}

export default aiResponse;