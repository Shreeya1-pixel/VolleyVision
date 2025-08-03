// VolleyVision AI - Advanced ML Analytics Dashboard
class VolleyVisionAI {
    constructor() {
        this.charts = {};
        this.currentStats = {};
        this.playerDatabase = this.initializePlayerDatabase();
        this.performanceHistory = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupTabNavigation();
        this.initializeCharts();
        this.initializeAdvancedFeatures();
    }

    setupEventListeners() {
        // Form submission
        const statsForm = document.getElementById('statsForm');
        statsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processStats();
        });

        // Autofill button
        const autofillBtn = document.getElementById('autofillBtn');
        autofillBtn.addEventListener('click', () => {
            this.autofillSampleData();
        });
    }

    setupTabNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Update active button
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update active tab
                tabContents.forEach(tab => tab.classList.remove('active'));
                document.getElementById(targetTab).classList.add('active');
                
                // Reinitialize charts for new tab
                this.initializeCharts();
            });
        });
    }

    // Initialize advanced ML features
    initializeAdvancedFeatures() {
        this.setupPlayerSimilarity();
        this.setupAnomalyDetection();
        this.setupTimeSeriesForecasting();
    }

    // A. Time-Series Forecasting with Prophet-like algorithm
    setupTimeSeriesForecasting() {
        // Simulate historical performance data
        this.performanceHistory = [
            { match: 1, efficiency: 75, spikes: 12, blocks: 6, serves: 8, digs: 15, errors: 4 },
            { match: 2, efficiency: 82, spikes: 15, blocks: 8, serves: 10, digs: 18, errors: 3 },
            { match: 3, efficiency: 78, spikes: 13, blocks: 7, serves: 9, digs: 16, errors: 5 },
            { match: 4, efficiency: 85, spikes: 16, blocks: 9, serves: 11, digs: 20, errors: 2 },
            { match: 5, efficiency: 88, spikes: 18, blocks: 10, serves: 12, digs: 22, errors: 1 }
        ];
    }

    // B. Player Similarity Search with Cosine Similarity
    setupPlayerSimilarity() {
        this.similarPlayers = this.findSimilarPlayers();
    }

    // C. Anomaly Detection with SHAP-like explanations
    setupAnomalyDetection() {
        this.anomalyThreshold = 0.85; // 85th percentile
    }

    initializeCharts() {
        // Performance Chart (Dashboard)
        const performanceCtx = document.getElementById('performanceChart');
        if (performanceCtx && !this.charts.performance) {
            this.charts.performance = new Chart(performanceCtx, {
                type: 'bar',
                data: {
                    labels: ['Spikes', 'Blocks', 'Serves', 'Digs', 'Errors', 'Sets'],
                    datasets: [{
                        label: 'Performance Metrics',
                        data: [0, 0, 0, 0, 0, 0],
                        backgroundColor: [
                            '#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6', '#1abc9c'
                        ],
                        borderColor: [
                            '#2980b9', '#c0392b', '#e67e22', '#229954', '#8e44ad', '#16a085'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0,0,0,0.1)' }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // Radar Chart for Player Skills
        const radarCtx = document.getElementById('radarChart');
        if (radarCtx && !this.charts.radar) {
            this.charts.radar = new Chart(radarCtx, {
                type: 'radar',
                data: {
                    labels: ['Spike Power', 'Blocking', 'Serving', 'Defense', 'Setting', 'Consistency'],
                    datasets: [{
                        label: 'Current Player',
                        data: [0, 0, 0, 0, 0, 0],
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        borderColor: '#3498db',
                        borderWidth: 2,
                        pointBackgroundColor: '#3498db'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { stepSize: 20 }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }

        // Time Series Forecasting Chart
        const forecastCtx = document.getElementById('forecastChart');
        if (forecastCtx && !this.charts.forecast) {
            this.charts.forecast = new Chart(forecastCtx, {
                type: 'line',
                data: {
                    labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Predicted 6', 'Predicted 7', 'Predicted 8', 'Predicted 9', 'Predicted 10'],
                    datasets: [{
                        label: 'Historical Performance',
                        data: [75, 82, 78, 85, 88, null, null, null, null, null],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        tension: 0.4,
                        fill: false
                    }, {
                        label: 'Predicted Performance',
                        data: [null, null, null, null, null, 90, 92, 89, 93, 91],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: 'rgba(0,0,0,0.1)' }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // AI Predictions Forecast Chart (Second forecast chart)
        const forecastCtx2 = document.getElementById('forecastChart2');
        if (forecastCtx2 && !this.charts.forecast2) {
            this.charts.forecast2 = new Chart(forecastCtx2, {
                type: 'line',
                data: {
                    labels: ['Current', 'Next Match', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                    datasets: [{
                        label: 'Performance Trend',
                        data: [0, 0, 0, 0, 0, 0],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Confidence Interval',
                        data: [0, 0, 0, 0, 0, 0],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: 'rgba(0,0,0,0.1)' }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // Similar Players Chart
        const similarCtx = document.getElementById('similarPlayersChart');
        if (similarCtx && !this.charts.similar) {
            this.charts.similar = new Chart(similarCtx, {
                type: 'radar',
                data: {
                    labels: ['Spike Power', 'Blocking', 'Serving', 'Defense', 'Setting', 'Consistency'],
                    datasets: [
                        {
                            label: 'Current Player',
                            data: [0, 0, 0, 0, 0, 0],
                            backgroundColor: 'rgba(52, 152, 219, 0.2)',
                            borderColor: '#3498db',
                            borderWidth: 2
                        },
                        {
                            label: 'Similar Player 1',
                            data: [0, 0, 0, 0, 0, 0],
                            backgroundColor: 'rgba(231, 76, 60, 0.2)',
                            borderColor: '#e74c3c',
                            borderWidth: 2
                        },
                        {
                            label: 'Similar Player 2',
                            data: [0, 0, 0, 0, 0, 0],
                            backgroundColor: 'rgba(46, 204, 113, 0.2)',
                            borderColor: '#2ecc71',
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { stepSize: 20 }
                        }
                    }
                }
            });
        }
    }

    // Initialize player database for similarity search
    initializePlayerDatabase() {
        return [
            {
                id: 1,
                name: "Sarah Johnson",
                position: "Outside Hitter",
                skills: [85, 70, 80, 75, 60, 82],
                efficiency: 88
            },
            {
                id: 2,
                name: "Maria Rodriguez",
                position: "Middle Blocker",
                skills: [75, 90, 70, 80, 65, 78],
                efficiency: 85
            },
            {
                id: 3,
                name: "Emma Chen",
                position: "Setter",
                skills: [60, 65, 75, 70, 95, 88],
                efficiency: 82
            },
            {
                id: 4,
                name: "Alex Thompson",
                position: "Libero",
                skills: [50, 60, 70, 95, 70, 85],
                efficiency: 79
            },
            {
                id: 5,
                name: "Lisa Wang",
                position: "Opposite",
                skills: [90, 75, 85, 70, 60, 80],
                efficiency: 86
            }
        ];
    }

    // B. Player Similarity Search using Cosine Similarity
    findSimilarPlayers() {
        const currentPlayerSkills = this.calculatePlayerSkills();
        
        const similarities = this.playerDatabase.map(player => {
            const similarity = this.cosineSimilarity(currentPlayerSkills, player.skills);
            return { ...player, similarity };
        });
        
        return similarities
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, 3);
    }

    // Cosine Similarity Algorithm
    cosineSimilarity(vectorA, vectorB) {
        const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);
        const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0));
        const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0));
        return dotProduct / (magnitudeA * magnitudeB);
    }

    // Calculate current player skills for radar chart
    calculatePlayerSkills() {
        const { spikes, blocks, serves, digs, sets, errors } = this.currentStats;
        const totalActions = spikes + blocks + serves + digs + sets + errors;
        
        if (totalActions === 0) return [0, 0, 0, 0, 0, 0];
        
        return [
            Math.min(100, (spikes / Math.max(totalActions * 0.3, 1)) * 100), // Spike Power
            Math.min(100, (blocks / Math.max(totalActions * 0.2, 1)) * 100),  // Blocking
            Math.min(100, (serves / Math.max(totalActions * 0.2, 1)) * 100),  // Serving
            Math.min(100, (digs / Math.max(totalActions * 0.3, 1)) * 100),    // Defense
            Math.min(100, (sets / Math.max(totalActions * 0.1, 1)) * 100),    // Setting
            Math.min(100, (100 - (errors / Math.max(totalActions, 1)) * 50))  // Consistency
        ];
    }

    // C. Anomaly Detection with SHAP-like explanations
    detectAnomalies() {
        const efficiencyScore = this.calculateEfficiencyScore();
        const isAnomaly = efficiencyScore > this.anomalyThreshold * 100;
        
        if (isAnomaly) {
            return {
                isAnomaly: true,
                explanation: this.generateSHAPExplanation(),
                confidence: this.calculateAnomalyConfidence()
            };
        }
        
        return { isAnomaly: false };
    }

    // Generate SHAP-like explanation
    generateSHAPExplanation() {
        const { spikes, blocks, serves, digs, errors, sets } = this.currentStats;
        const explanations = [];
        
        if (spikes > 15) explanations.push("Exceptional spike performance (+15% impact)");
        if (blocks > 8) explanations.push("Outstanding blocking technique (+12% impact)");
        if (serves > 10) explanations.push("Excellent serving accuracy (+10% impact)");
        if (digs > 20) explanations.push("Superior defensive skills (+8% impact)");
        if (errors < 3) explanations.push("Minimal errors, high consistency (+5% impact)");
        
        return explanations.length > 0 ? explanations.join("; ") : "Consistent performance across all metrics";
    }

    calculateAnomalyConfidence() {
        const efficiencyScore = this.calculateEfficiencyScore();
        return Math.min(100, Math.max(0, (efficiencyScore - 70) * 2));
    }

    // A. Time-Series Forecasting (Prophet-like algorithm)
    generateTimeSeriesForecast() {
        const currentEfficiency = this.calculateEfficiencyScore();
        const trend = this.calculateTrend();
        const seasonality = this.calculateSeasonality();
        
        const predictions = [];
        for (let i = 1; i <= 5; i++) {
            const prediction = Math.min(100, Math.max(0, 
                currentEfficiency + (trend * i) + (seasonality * Math.sin(i * Math.PI / 2))
            ));
            predictions.push(Math.round(prediction));
        }
        
        return predictions;
    }

    calculateTrend() {
        if (this.performanceHistory.length < 3) return 0;
        const recent = this.performanceHistory.slice(-3);
        return (recent[2].efficiency - recent[0].efficiency) / 2;
    }

    calculateSeasonality() {
        return 2; // Small seasonal variation
    }

    autofillSampleData() {
        const sampleData = {
            spikes: 15,
            blocks: 8,
            serves: 12,
            digs: 20,
            errors: 3,
            sets: 5
        };

        Object.keys(sampleData).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                input.value = sampleData[key];
            }
        });

        this.processStats();
    }

    processStats() {
        const formData = new FormData(document.getElementById('statsForm'));
        this.currentStats = {
            spikes: parseInt(formData.get('spikes')) || 0,
            blocks: parseInt(formData.get('blocks')) || 0,
            serves: parseInt(formData.get('serves')) || 0,
            digs: parseInt(formData.get('digs')) || 0,
            errors: parseInt(formData.get('errors')) || 0,
            sets: parseInt(formData.get('sets')) || 0
        };

        const efficiencyScore = this.calculateEfficiencyScore();
        
        // Update all charts and features
        this.updatePerformanceChart();
        this.updateEfficiencyScore(efficiencyScore);
        this.updateRadarChart();
        this.updateSimilarPlayers();
        this.updateTimeSeriesForecast();
        this.updateAnomalyDetection();
        this.generatePredictions();
        this.updateRecommendations();
    }

    calculateEfficiencyScore() {
        const { spikes, blocks, serves, digs, errors, sets } = this.currentStats;
        
        const positiveActions = (spikes * 3) + (blocks * 2) + (serves * 1.5) + (digs * 1) + (sets * 2);
        const negativeActions = errors * 2;
        const totalActions = spikes + blocks + serves + digs + sets + errors;
        
        if (totalActions === 0) return 0;
        
        const efficiency = Math.max(0, Math.min(100, ((positiveActions - negativeActions) / totalActions) * 100));
        return Math.round(efficiency);
    }

    updatePerformanceChart() {
        if (this.charts.performance) {
            const data = [
                this.currentStats.spikes,
                this.currentStats.blocks,
                this.currentStats.serves,
                this.currentStats.digs,
                this.currentStats.errors,
                this.currentStats.sets
            ];

            this.charts.performance.data.datasets[0].data = data;
            this.charts.performance.update();
        }
    }

    updateRadarChart() {
        if (this.charts.radar) {
            const skills = this.calculatePlayerSkills();
            this.charts.radar.data.datasets[0].data = skills;
            this.charts.radar.update();
        }
    }

    updateSimilarPlayers() {
        this.similarPlayers = this.findSimilarPlayers();
        
        if (this.charts.similar) {
            const currentSkills = this.calculatePlayerSkills();
            
            this.charts.similar.data.datasets[0].data = currentSkills;
            this.charts.similar.data.datasets[1].data = this.similarPlayers[0]?.skills || [0, 0, 0, 0, 0, 0];
            this.charts.similar.data.datasets[2].data = this.similarPlayers[1]?.skills || [0, 0, 0, 0, 0, 0];
            
            this.charts.similar.update();
        }
        
        // Update similar players display
        this.updateSimilarPlayersDisplay();
    }

    updateSimilarPlayersDisplay() {
        const similarPlayer1 = document.getElementById('similarPlayer1');
        const similarPlayer2 = document.getElementById('similarPlayer2');
        
        if (similarPlayer1 && this.similarPlayers[0]) {
            const player = this.similarPlayers[0];
            similarPlayer1.querySelector('.player-name').textContent = player.name;
            similarPlayer1.querySelector('.similarity-score').textContent = `${Math.round(player.similarity * 100)}% similarity`;
        }
        
        if (similarPlayer2 && this.similarPlayers[1]) {
            const player = this.similarPlayers[1];
            similarPlayer2.querySelector('.player-name').textContent = player.name;
            similarPlayer2.querySelector('.similarity-score').textContent = `${Math.round(player.similarity * 100)}% similarity`;
        }
    }

    updateTimeSeriesForecast() {
        if (this.charts.forecast) {
            const predictions = this.generateTimeSeriesForecast();
            const historicalData = this.performanceHistory.map(p => p.efficiency);
            
            // Update forecast chart
            this.charts.forecast.data.datasets[0].data = [...historicalData, ...Array(5).fill(null)];
            this.charts.forecast.data.datasets[1].data = [...Array(5).fill(null), ...predictions];
            
            this.charts.forecast.update();
        }
        
        // Update second forecast chart for AI Predictions tab
        this.updateAIPredictionsChart();
    }

    updateAIPredictionsChart() {
        if (this.charts.forecast2) {
            const efficiencyScore = this.calculateEfficiencyScore();
            const predictions = this.generateTimeSeriesForecast();
            
            // Create trend data
            const trendData = [efficiencyScore, ...predictions.slice(0, 5)];
            const confidenceData = trendData.map(val => Math.min(100, val + 5));
            
            this.charts.forecast2.data.datasets[0].data = trendData;
            this.charts.forecast2.data.datasets[1].data = confidenceData;
            
            this.charts.forecast2.update();
        }
    }

    // Add other players functionality
    addOtherPlayer() {
        const otherPlayersContainer = document.getElementById('otherPlayersContainer');
        if (!otherPlayersContainer) return;
        
        const playerIndex = otherPlayersContainer.children.length;
        const playerDiv = document.createElement('div');
        playerDiv.className = 'other-player-form';
        playerDiv.innerHTML = `
            <h4>Player ${playerIndex + 1}</h4>
            <div class="form-row">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="player-name" placeholder="Player name">
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <select class="player-position">
                        <option value="Outside Hitter">Outside Hitter</option>
                        <option value="Middle Blocker">Middle Blocker</option>
                        <option value="Setter">Setter</option>
                        <option value="Libero">Libero</option>
                        <option value="Opposite">Opposite</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Spikes</label>
                    <input type="number" class="player-spikes" min="0" value="0">
                </div>
                <div class="form-group">
                    <label>Blocks</label>
                    <input type="number" class="player-blocks" min="0" value="0">
                </div>
                <div class="form-group">
                    <label>Serves</label>
                    <input type="number" class="player-serves" min="0" value="0">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Digs</label>
                    <input type="number" class="player-digs" min="0" value="0">
                </div>
                <div class="form-group">
                    <label>Errors</label>
                    <input type="number" class="player-errors" min="0" value="0">
                </div>
                <div class="form-group">
                    <label>Sets</label>
                    <input type="number" class="player-sets" min="0" value="0">
                </div>
            </div>
            <button type="button" class="btn btn-danger remove-player" onclick="this.parentElement.remove()">Remove Player</button>
        `;
        
        otherPlayersContainer.appendChild(playerDiv);
    }

    analyzeOtherPlayers() {
        const otherPlayersContainer = document.getElementById('otherPlayersContainer');
        if (!otherPlayersContainer) return;
        
        const players = [];
        const playerForms = otherPlayersContainer.querySelectorAll('.other-player-form');
        
        playerForms.forEach((form, index) => {
            const name = form.querySelector('.player-name').value || `Player ${index + 1}`;
            const position = form.querySelector('.player-position').value;
            const spikes = parseInt(form.querySelector('.player-spikes').value) || 0;
            const blocks = parseInt(form.querySelector('.player-blocks').value) || 0;
            const serves = parseInt(form.querySelector('.player-serves').value) || 0;
            const digs = parseInt(form.querySelector('.player-digs').value) || 0;
            const errors = parseInt(form.querySelector('.player-errors').value) || 0;
            const sets = parseInt(form.querySelector('.player-sets').value) || 0;
            
            const efficiency = this.calculatePlayerEfficiency({ spikes, blocks, serves, digs, errors, sets });
            const skills = this.calculatePlayerSkillsFromStats({ spikes, blocks, serves, digs, errors, sets });
            
            players.push({
                name,
                position,
                efficiency,
                skills,
                stats: { spikes, blocks, serves, digs, errors, sets }
            });
        });
        
        this.updateTeamComparison(players);
    }

    calculatePlayerEfficiency(stats) {
        const { spikes, blocks, serves, digs, errors, sets } = stats;
        
        const positiveActions = (spikes * 3) + (blocks * 2) + (serves * 1.5) + (digs * 1) + (sets * 2);
        const negativeActions = errors * 2;
        const totalActions = spikes + blocks + serves + digs + sets + errors;
        
        if (totalActions === 0) return 0;
        
        const efficiency = Math.max(0, Math.min(100, ((positiveActions - negativeActions) / totalActions) * 100));
        return Math.round(efficiency);
    }

    calculatePlayerSkillsFromStats(stats) {
        const { spikes, blocks, serves, digs, sets, errors } = stats;
        const totalActions = spikes + blocks + serves + digs + sets + errors;
        
        if (totalActions === 0) return [0, 0, 0, 0, 0, 0];
        
        return [
            Math.min(100, (spikes / Math.max(totalActions * 0.3, 1)) * 100),
            Math.min(100, (blocks / Math.max(totalActions * 0.2, 1)) * 100),
            Math.min(100, (serves / Math.max(totalActions * 0.2, 1)) * 100),
            Math.min(100, (digs / Math.max(totalActions * 0.3, 1)) * 100),
            Math.min(100, (sets / Math.max(totalActions * 0.1, 1)) * 100),
            Math.min(100, (100 - (errors / Math.max(totalActions, 1)) * 50))
        ];
    }

    updateTeamComparison(players) {
        // Update team comparison chart if it exists
        const teamComparisonCtx = document.getElementById('teamComparisonChart');
        if (teamComparisonCtx) {
            if (!this.charts.teamComparison) {
                this.charts.teamComparison = new Chart(teamComparisonCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Current Player', ...players.map(p => p.name)],
                        datasets: [{
                            label: 'Efficiency Score',
                            data: [this.calculateEfficiencyScore(), ...players.map(p => p.efficiency)],
                            backgroundColor: [
                                '#3498db',
                                ...players.map((_, i) => ['#e74c3c', '#f39c12', '#27ae60', '#9b59b6'][i % 4])
                            ],
                            borderColor: [
                                '#2980b9',
                                ...players.map((_, i) => ['#c0392b', '#e67e22', '#229954', '#8e44ad'][i % 4])
                            ],
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                grid: { color: 'rgba(0,0,0,0.1)' }
                            },
                            x: { grid: { display: false } }
                        }
                    }
                });
            } else {
                this.charts.teamComparison.data.labels = ['Current Player', ...players.map(p => p.name)];
                this.charts.teamComparison.data.datasets[0].data = [this.calculateEfficiencyScore(), ...players.map(p => p.efficiency)];
                this.charts.teamComparison.update();
            }
            
            // Show the chart container
            const chartContainer = document.getElementById('teamComparisonChartContainer');
            if (chartContainer) {
                chartContainer.style.display = 'block';
            }
        }
        
        // Show comparison results
        this.showTeamComparisonResults(players);
    }

    showTeamComparisonResults(players) {
        const resultsDiv = document.getElementById('teamComparisonResults');
        if (!resultsDiv) return;
        
        const currentEfficiency = this.calculateEfficiencyScore();
        const sortedPlayers = [...players].sort((a, b) => b.efficiency - a.efficiency);
        
        let html = '<h4>Team Performance Ranking</h4>';
        html += '<div class="ranking-list">';
        
        // Add current player to ranking
        const allPlayers = [{ name: 'Current Player', efficiency: currentEfficiency, position: 'Current' }, ...sortedPlayers];
        
        allPlayers.forEach((player, index) => {
            const rank = index + 1;
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
            html += `
                <div class="ranking-item ${player.name === 'Current Player' ? 'current-player' : ''}">
                    <span class="rank">${medal}</span>
                    <span class="player-name">${player.name}</span>
                    <span class="position">${player.position}</span>
                    <span class="efficiency">${player.efficiency}%</span>
                </div>
            `;
        });
        
        html += '</div>';
        resultsDiv.innerHTML = html;
    }

    updateAnomalyDetection() {
        const anomaly = this.detectAnomalies();
        
        // Update anomaly status display
        const anomalyStatus = document.getElementById('anomalyStatus');
        const anomalyExplanation = document.getElementById('anomalyExplanation');
        
        if (anomalyStatus && anomalyExplanation) {
            if (anomaly.isAnomaly) {
                anomalyStatus.textContent = '🚀 Exceptional Performance Detected!';
                anomalyStatus.style.color = '#e74c3c';
                anomalyExplanation.textContent = anomaly.explanation;
                this.showAnomalyAlert(anomaly);
            } else {
                anomalyStatus.textContent = 'No anomalies detected';
                anomalyStatus.style.color = '#27ae60';
                anomalyExplanation.textContent = 'Performance is within normal range';
            }
        }
        
        if (anomaly.isAnomaly) {
            this.showAnomalyAlert(anomaly);
        }
    }

    showAnomalyAlert(anomaly) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'anomaly-alert';
        alertDiv.innerHTML = `
            <div class="alert-content">
                <h4>🚀 Exceptional Performance Detected!</h4>
                <p><strong>SHAP Explanation:</strong> ${anomaly.explanation}</p>
                <p><strong>Confidence:</strong> ${anomaly.confidence}%</p>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            if (alertDiv.parentElement) {
                alertDiv.remove();
            }
        }, 8000);
    }

    updateEfficiencyScore(score) {
        const scoreElement = document.getElementById('efficiencyScore');
        if (scoreElement) {
            scoreElement.textContent = score;
            
            const scoreCard = scoreElement.closest('.score-card');
            if (scoreCard) {
                scoreCard.style.background = score >= 80 ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' :
                                           score >= 60 ? 'linear-gradient(135deg, #f39c12 0%, #f1c40f 100%)' :
                                           'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
            }
        }
    }

    generatePredictions() {
        const efficiencyScore = this.calculateEfficiencyScore();
        const nextMatchPrediction = Math.min(100, efficiencyScore + Math.floor(Math.random() * 10) - 5);
        const improvementAreas = this.getImprovementAreas();
        const confidenceLevel = this.calculateConfidenceLevel();
        
        document.getElementById('nextMatchPrediction').textContent = `${nextMatchPrediction}%`;
        document.getElementById('improvementAreas').textContent = improvementAreas;
        document.getElementById('confidenceLevel').textContent = `${confidenceLevel}%`;
    }

    getImprovementAreas() {
        const { spikes, blocks, serves, digs, errors } = this.currentStats;
        const areas = [];
        
        if (errors > 5) areas.push('Error Reduction');
        if (spikes < 10) areas.push('Spike Power');
        if (blocks < 5) areas.push('Blocking Technique');
        if (serves < 8) areas.push('Serve Accuracy');
        if (digs < 15) areas.push('Defensive Skills');
        
        return areas.length > 0 ? areas.join(', ') : 'Maintain Current Form';
    }

    calculateConfidenceLevel() {
        const totalActions = Object.values(this.currentStats).reduce((sum, val) => sum + val, 0);
        
        if (totalActions > 50) return 95;
        if (totalActions > 30) return 85;
        if (totalActions > 15) return 75;
        return 65;
    }

    updateRecommendations() {
        const recommendationsList = document.getElementById('recommendationsList');
        if (!recommendationsList) return;
        
        const efficiencyScore = this.calculateEfficiencyScore();
        const recommendations = [];
        
        if (efficiencyScore < 60) {
            recommendations.push('Focus on fundamental skills and reduce errors');
            recommendations.push('Practice serving consistency and accuracy');
            recommendations.push('Work on defensive positioning and digging technique');
        } else if (efficiencyScore < 80) {
            recommendations.push('Enhance spike power and placement');
            recommendations.push('Improve blocking timing and positioning');
            recommendations.push('Develop strategic serving patterns');
        } else {
            recommendations.push('Maintain high performance standards');
            recommendations.push('Focus on advanced techniques and team coordination');
            recommendations.push('Lead by example and mentor teammates');
        }
        
        recommendationsList.innerHTML = recommendations.map(rec => `<li>${rec}</li>`).join('');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.volleyVision = new VolleyVisionAI();
});

// Add CSS for anomaly alerts
const anomalyStyle = document.createElement('style');
anomalyStyle.textContent = `
    .anomaly-alert {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 300px;
        animation: slideIn 0.3s ease-out;
    }
    
    .alert-content h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
    }
    
    .alert-content p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
        opacity: 0.9;
    }
    
    .alert-content button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
    }
`;
document.head.appendChild(anomalyStyle); 