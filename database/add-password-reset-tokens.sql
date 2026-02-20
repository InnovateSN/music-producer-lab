-- Password Reset Tokens Table
-- Stores SHA-256 digests (not raw tokens) for password reset functionality

CREATE TABLE IF NOT EXISTS password_reset_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_digest CHAR(64) UNIQUE NOT NULL, -- Hex-encoded SHA-256 digest of the reset token
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_password_reset_tokens_token_digest ON password_reset_tokens(token_digest);
CREATE INDEX idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);
CREATE INDEX idx_password_reset_tokens_expires ON password_reset_tokens(expires_at);

-- Clean up expired tokens (can be run periodically)
-- DELETE FROM password_reset_tokens WHERE expires_at < NOW() OR used_at IS NOT NULL;
