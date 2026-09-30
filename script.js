/**
 * Birthday Celebration App Logic
 * Features:
 * 1. Interactive Candle Blowing & Flame Toggling
 * 2. Canvas Confetti Particle Engine
 * 3. Dynamic Background Floating Balloons
 * 4. Web Audio API Happy Birthday Melodic Synthesizer
 * 5. Customizable Card Modal & Theme Switcher
 * 6. Interactive Gift Box Surprise Modal
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const confettiCanvas = document.getElementById('confetti-canvas');
    const ctx = confettiCanvas.getContext('2d');
    const balloonsContainer = document.getElementById('balloons-container');
    const musicBtn = document.getElementById('music-btn');
    const confettiBtn = document.getElementById('confetti-btn');
    const customizeBtn = document.getElementById('customize-btn');
    const customizerModal = document.getElementById('customizer-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const customizeForm = document.getElementById('customize-form');
    const resetBtn = document.getElementById('reset-btn');

    const recipientPhoto = document.getElementById('recipient-photo');
    const badgeAge = document.getElementById('badge-age');
    const displayName = document.getElementById('display-name');
    const displayAge = document.getElementById('display-age');
    const displayWish = document.getElementById('display-wish');

    const blowAllBtn = document.getElementById('blow-all-btn');
    const celebrationModal = document.getElementById('celebration-modal');
    const closeCelebrationBtn = document.getElementById('close-celebration-btn');

    const giftBox = document.getElementById('gift-box');
    const giftModal = document.getElementById('gift-modal');
    const closeGiftModal = document.getElementById('close-gift-modal');

    // --- State Defaults ---
    const defaultData = {
        name: 'Alex Morgan',
        age: '25',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        wish: 'May your day be filled with joy, laughter, endless cake, and unforgettable moments! Wishing you another magnificent year ahead filled with love and success.',
        theme: 'pastel'
    };

    let currentData = { ...defaultData };
    let isMusicPlaying = false;
    let audioCtx = null;

    // Set Canvas Dimensions
    function resizeCanvas() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // --- 1. Canvas Confetti System ---
    let confettiParticles = [];
    const confettiColors = ['#ff477e', '#ffb703', '#7052ff', '#00f0ff', '#ff007f', '#06d6a0', '#ffc6ff'];

    class ConfettiParticle {
        constructor(x, y) {
            this.x = x !== undefined ? x : Math.random() * confettiCanvas.width;
            this.y = y !== undefined ? y : Math.random() * confettiCanvas.height - confettiCanvas.height;
            this.size = Math.random() * 10 + 5;
            this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.opacity = 1;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            if (this.y > confettiCanvas.height) {
                this.y = -20;
                this.x = Math.random() * confettiCanvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    function initConfetti(count = 70) {
        confettiParticles = [];
        for (let i = 0; i < count; i++) {
            confettiParticles.push(new ConfettiParticle());
        }
    }

    function triggerConfettiBurst() {
        for (let i = 0; i < 60; i++) {
            const particle = new ConfettiParticle(
                window.innerWidth / 2 + (Math.random() * 200 - 100),
                window.innerHeight / 2 + (Math.random() * 200 - 100)
            );
            particle.speedY = Math.random() * 6 - 3;
            particle.speedX = Math.random() * 8 - 4;
            confettiParticles.push(particle);
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiParticles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animateConfetti);
    }

    initConfetti();
    animateConfetti();

    // --- 2. Floating Background Balloons Generator ---
    function generateBalloons(count = 12) {
        balloonsContainer.innerHTML = '';
        const colors = ['#ff477e', '#ffb703', '#7052ff', '#00f0ff', '#06d6a0', '#ff007f'];
        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 95}%`;
            balloon.style.backgroundColor = colors[i % colors.length];
            balloon.style.animationDuration = `${8 + Math.random() * 8}s`;
            balloon.style.animationDelay = `${Math.random() * 5}s`;
            balloonsContainer.appendChild(balloon);
        }
    }
    generateBalloons();

    // --- 3. Interactive Candle Blowing Engine ---
    const candlesLayer = document.getElementById('candles-layer');

    function createCandles(count) {
        candlesLayer.innerHTML = '';
        const numCandles = Math.min(Math.max(count, 1), 7); // Show 1 to 7 candles on cake
        for (let i = 0; i < numCandles; i++) {
            const candle = document.createElement('div');
            candle.className = 'candle';
            candle.dataset.index = i;
            candle.setAttribute('role', 'button');
            candle.setAttribute('tabindex', '0');
            candle.setAttribute('aria-label', `Candle ${i + 1}`);
            candle.innerHTML = `
                <div class="flame"></div>
                <div class="wick"></div>
                <div class="stick"></div>
            `;
            candle.addEventListener('click', () => blowCandle(candle));
            candle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    blowCandle(candle);
                }
            });
            candlesLayer.appendChild(candle);
        }
    }

    function blowCandle(candleEl) {
        if (!candleEl.classList.contains('blown-out')) {
            candleEl.classList.add('blown-out');
            const index = parseInt(candleEl.dataset.index, 10) + 1;
            candleEl.setAttribute('aria-label', `Candle ${index} blown out`);
            playCandleSound();
            checkAllCandlesBlown();
        }
    }

    function checkAllCandlesBlown() {
        const allCandles = candlesLayer.querySelectorAll('.candle');
        const blownCandles = candlesLayer.querySelectorAll('.candle.blown-out');
        if (allCandles.length > 0 && allCandles.length === blownCandles.length) {
            setTimeout(() => {
                celebrationModal.classList.add('active');
                triggerConfettiBurst();
            }, 500);
        }
    }

    blowAllBtn.addEventListener('click', () => {
        const allCandles = candlesLayer.querySelectorAll('.candle');
        allCandles.forEach((candle) => candle.classList.add('blown-out'));
        playCandleSound();
        setTimeout(() => {
            celebrationModal.classList.add('active');
            triggerConfettiBurst();
        }, 400);
    });

    closeCelebrationBtn.addEventListener('click', () => {
        celebrationModal.classList.remove('active');
    });

    // --- 4. Audio Synthesizer (Happy Birthday Tune via Web Audio API) ---
    function playCandleSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } catch (e) {
            console.log('Audio playback prevented or unsupported');
        }
    }

    // Melodic sequence for Happy Birthday
    const melody = [
        { note: 261.63, duration: 0.35 }, // C4
        { note: 261.63, duration: 0.25 }, // C4
        { note: 293.66, duration: 0.6 },  // D4
        { note: 261.63, duration: 0.6 },  // C4
        { note: 349.23, duration: 0.6 },  // F4
        { note: 329.63, duration: 1.0 },  // E4

        { note: 261.63, duration: 0.35 }, // C4
        { note: 261.63, duration: 0.25 }, // C4
        { note: 293.66, duration: 0.6 },  // D4
        { note: 261.63, duration: 0.6 },  // C4
        { note: 392.00, duration: 0.6 },  // G4
        { note: 349.23, duration: 1.0 },  // F4

        { note: 261.63, duration: 0.35 }, // C4
        { note: 261.63, duration: 0.25 }, // C4
        { note: 523.25, duration: 0.6 },  // C5
        { note: 440.00, duration: 0.6 },  // A4
        { note: 349.23, duration: 0.6 },  // F4
        { note: 329.63, duration: 0.6 },  // E4
        { note: 293.66, duration: 1.0 },  // D4

        { note: 466.16, duration: 0.35 }, // Bb4
        { note: 466.16, duration: 0.25 }, // Bb4
        { note: 440.00, duration: 0.6 },  // A4
        { note: 349.23, duration: 0.6 },  // F4
        { note: 392.00, duration: 0.6 },  // G4
        { note: 349.23, duration: 1.2 }   // F4
    ];

    let melodyTimeouts = [];

    function playHappyBirthdaySong() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        let currentTime = audioCtx.currentTime;

        melody.forEach((item) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.value = item.note;

            gain.gain.setValueAtTime(0.2, currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, currentTime + item.duration - 0.05);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(currentTime);
            osc.stop(currentTime + item.duration);

            currentTime += item.duration;
        });

        // Loop melody after total duration
        const totalDuration = (currentTime - audioCtx.currentTime) * 1000;
        const timeoutId = setTimeout(() => {
            if (isMusicPlaying) {
                playHappyBirthdaySong();
            }
        }, totalDuration);
        melodyTimeouts.push(timeoutId);
    }

    function stopHappyBirthdaySong() {
        melodyTimeouts.forEach(clearTimeout);
        melodyTimeouts = [];
        if (audioCtx) {
            audioCtx.close();
            audioCtx = null;
        }
    }

    musicBtn.addEventListener('click', () => {
        isMusicPlaying = !isMusicPlaying;
        if (isMusicPlaying) {
            musicBtn.classList.add('active');
            musicBtn.querySelector('.btn-tooltip').innerText = 'Stop Music';
            playHappyBirthdaySong();
        } else {
            musicBtn.classList.remove('active');
            musicBtn.querySelector('.btn-tooltip').innerText = 'Play Music';
            stopHappyBirthdaySong();
        }
    });

    confettiBtn.addEventListener('click', () => {
        triggerConfettiBurst();
    });

    // --- 5. Gift Modal Interaction ---
    function openGiftModal() {
        giftModal.classList.add('active');
        triggerConfettiBurst();
    }

    giftBox.addEventListener('click', openGiftModal);
    giftBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openGiftModal();
        }
    });

    closeGiftModal.addEventListener('click', () => {
        giftModal.classList.remove('active');
    });

    // --- 6. Customization Modal & Theme Engine ---
    customizeBtn.addEventListener('click', () => {
        customizerModal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
        customizerModal.classList.remove('active');
    });

    // Theme selector options
    const themeButtons = document.querySelectorAll('.theme-option');
    themeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            themeButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentData.theme = btn.dataset.theme;
        });
    });

    // Form submission
    customizeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        currentData.name = document.getElementById('input-name').value || 'Alex Morgan';
        currentData.age = document.getElementById('input-age').value || '25';
        currentData.photo = document.getElementById('input-photo').value || defaultData.photo;
        currentData.wish = document.getElementById('input-wish').value || defaultData.wish;

        updateCardUI();
        customizerModal.classList.remove('active');
        triggerConfettiBurst();
    });

    resetBtn.addEventListener('click', () => {
        currentData = { ...defaultData };
        document.getElementById('input-name').value = defaultData.name;
        document.getElementById('input-age').value = defaultData.age;
        document.getElementById('input-photo').value = defaultData.photo;
        document.getElementById('input-wish').value = defaultData.wish;

        themeButtons.forEach((b) => {
            b.classList.toggle('active', b.dataset.theme === 'pastel');
        });

        updateCardUI();
    });

    function updateCardUI() {
        displayName.innerText = currentData.name;
        displayAge.innerText = currentData.age;
        badgeAge.innerText = currentData.age;
        displayWish.innerText = `"${currentData.wish}"`;
        recipientPhoto.src = currentData.photo;

        // Apply theme attribute to html element
        document.documentElement.setAttribute('data-theme', currentData.theme);

        // Update candles count based on age (1 to 7 candles)
        const ageNum = parseInt(currentData.age, 10) || 5;
        createCandles(ageNum);
    }

    // --- Close Modals on Escape Key ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            customizerModal.classList.remove('active');
            celebrationModal.classList.remove('active');
            giftModal.classList.remove('active');
        }
    });

    // Initial UI render
    updateCardUI();
});
