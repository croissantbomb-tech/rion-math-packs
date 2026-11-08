export const __RION_STYLES__={"id":"rion-pack-style-balance-scale","css":".balance-pack{color:#1e293b;-webkit-user-select:none;user-select:none;touch-action:manipulation;background:linear-gradient(#ecfeff 0%,#f0fdf4 100%);flex-direction:column;min-height:100vh;font-family:-apple-system,BlinkMacSystemFont,Pretendard,Segoe UI,Roboto,sans-serif;display:flex;overflow-x:hidden}.balance-header{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:20;background:#fffffff2;border-bottom:2px solid #bae6fd;justify-content:space-between;align-items:center;padding:12px 20px;display:flex;position:sticky;top:0;box-shadow:0 2px 8px #0000000a}.balance-header-left{align-items:center;gap:12px;display:flex}.balance-exit-btn{color:#475569;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;padding:8px 14px;font-size:14px;font-weight:700;transition:all .15s}.balance-exit-btn:hover{background:#e2e8f0}.balance-title-group h1{color:#0369a1;align-items:center;gap:6px;margin:0;font-size:20px;font-weight:900;display:flex}.balance-title-group p{color:#0284c7;margin:2px 0 0;font-size:13px;font-weight:600}.balance-header-right{align-items:center;gap:8px;display:flex}.balance-btn{cursor:pointer;border:none;border-radius:14px;padding:8px 16px;font-size:14px;font-weight:800;transition:transform .1s,box-shadow .15s}.balance-btn:active{transform:scale(.96)}.balance-btn-primary{color:#fff;background:linear-gradient(135deg,#0284c7 0%,#0369a1 100%);box-shadow:0 2px 6px #0284c74d}.balance-btn-secondary{color:#334155;background:#f8fafc;border:1px solid #cbd5e1}.balance-mode-bar{background:#fff;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;justify-content:center;gap:8px;padding:10px 16px;display:flex}.balance-mode-btn{color:#64748b;cursor:pointer;background:#f1f5f9;border:2px solid #0000;border-radius:20px;padding:6px 14px;font-size:14px;font-weight:700;transition:all .15s}.balance-mode-btn.active{color:#0369a1;background:#e0f2fe;border-color:#0284c7;box-shadow:0 2px 6px #0284c726}.balance-guide-banner{text-align:center;color:#0f766e;background:#ccfbf1;border-bottom:1px solid #99f6e4;padding:10px 16px;font-size:16px;font-weight:800}.seesaw-stage{flex-direction:column;flex:1;justify-content:center;align-items:center;min-height:340px;padding:24px 16px;display:flex;position:relative}.seesaw-container{flex-direction:column;align-items:center;width:100%;max-width:680px;display:flex;position:relative}.seesaw-pivot-base{z-index:1;pointer-events:none;width:80px;height:90px;position:absolute;bottom:0;left:50%;transform:translate(-50%)}.seesaw-beam-wrapper{transform-origin:50% 180px;justify-content:space-between;align-items:center;width:100%;max-width:620px;height:240px;margin-bottom:60px;transition:transform .4s cubic-bezier(.34,1.56,.64,1);display:flex;position:relative}.seesaw-beam-line{z-index:2;background:linear-gradient(#64748b 0%,#334155 100%);border-radius:6px;height:12px;position:absolute;top:175px;left:30px;right:30px;box-shadow:0 4px 8px #00000026}.seesaw-center-indicator{z-index:5;white-space:nowrap;background:#fff;border:3px solid #cbd5e1;border-radius:20px;align-items:center;gap:6px;padding:4px 14px;font-size:20px;font-weight:900;display:flex;position:absolute;top:155px;left:50%;transform:translate(-50%);box-shadow:0 4px 10px #0000001a}.seesaw-center-indicator.balanced{color:#15803d;background:#dcfce7;border-color:#22c55e;animation:1.2s infinite alternate pulse-glow}.seesaw-center-indicator.tilted{color:#b45309;border-color:#f59e0b}@keyframes pulse-glow{0%{transform:translate(-50%)scale(1);box-shadow:0 0 4px #22c55e}to{transform:translate(-50%)scale(1.05);box-shadow:0 0 16px #22c55e}}.seesaw-pan{z-index:4;flex-direction:column;align-items:center;width:220px;min-height:180px;transition:transform .4s cubic-bezier(.34,1.56,.64,1);display:flex;position:relative}.seesaw-pan-left{position:absolute;top:40px;left:10px}.seesaw-pan-right{position:absolute;top:40px;right:10px}.seesaw-pan-basket{background:#ffffffd9;border:3px dashed #94a3b8;border-radius:16px;flex-direction:column-reverse;gap:6px;width:100%;min-height:120px;padding:10px;display:flex;position:relative;box-shadow:0 6px 12px #0000000f}.seesaw-pan-basket.target-pan{background:#f0f9ff;border-color:#38bdf8}.seesaw-pan-basket.answer-pan{background:#f0fdf4;border-color:#34d399}.seesaw-pan-basket.empty:after{content:\"수 막대를 올려주세요\";color:#94a3b8;white-space:nowrap;font-size:13px;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.seesaw-pan-badge{color:#334155;background:#fff;border:2px solid #cbd5e1;border-radius:14px;margin-top:8px;padding:4px 12px;font-size:15px;font-weight:800;box-shadow:0 2px 4px #0000000d}.number-rod{cursor:pointer;border:2px solid;border-radius:8px;justify-content:space-between;align-items:center;height:32px;padding:0 8px;transition:transform .1s,box-shadow .1s;display:flex;position:relative;overflow:hidden;box-shadow:0 2px 4px #00000014}.number-rod:active{transform:scale(.97)}.number-rod.fixed{cursor:default;opacity:.95}.number-rod-grid{pointer-events:none;display:flex;position:absolute;inset:0}.number-rod-cell{border-right:1px dashed #00000026;flex:1;height:100%}.number-rod-cell:last-child{border-right:none}.number-rod-val{color:#1e293b;z-index:2;text-shadow:0 1px 2px #fffc;font-size:15px;font-weight:900}.number-rod-remove{color:#ef4444;z-index:2;background:#ffffffe6;border-radius:50%;justify-content:center;align-items:center;width:18px;height:18px;font-size:12px;font-weight:700;display:flex}.balance-formula-bar{background:#fff;border:2px solid #bae6fd;border-radius:20px;justify-content:center;align-items:center;gap:16px;margin-top:16px;padding:12px 24px;font-size:20px;font-weight:900;display:flex;box-shadow:0 4px 12px #0284c714}.balance-formula-side{color:#0369a1;align-items:center;gap:6px;display:flex}.balance-formula-rel{border-radius:10px;padding:2px 10px;font-size:24px}.balance-formula-rel.eq{color:#16a34a;background:#dcfce7}.balance-formula-rel.diff{color:#d97706;background:#fef3c7}.rods-palette{background:#fff;border-top:2px solid #cbd5e1;flex-direction:column;gap:12px;padding:16px 20px 24px;display:flex;box-shadow:0 -4px 16px #0000000a}.rods-palette-header{justify-content:space-between;align-items:center;display:flex}.rods-palette-title{color:#334155;align-items:center;gap:6px;font-size:15px;font-weight:800;display:flex}.rods-palette-actions{gap:8px;display:flex}.rods-palette-grid{grid-template-columns:repeat(5,1fr);gap:10px;display:grid}@media (width>=768px){.rods-palette-grid{grid-template-columns:repeat(10,1fr)}}.rod-palette-btn{cursor:pointer;border:2px solid;border-radius:12px;flex-direction:column;justify-content:center;align-items:center;height:48px;transition:transform .1s,box-shadow .15s;display:flex;position:relative;overflow:hidden;box-shadow:0 2px 4px #0000000f}.rod-palette-btn:hover{transform:translateY(-2px);box-shadow:0 4px 8px #0000001f}.rod-palette-btn:active{transform:translateY(0)}.rod-palette-label{color:#0f172a;font-size:16px;font-weight:900}.rod-palette-blocks{gap:2px;margin-top:2px;display:flex}.rod-palette-dot{background:#0000004d;border-radius:50%;width:4px;height:4px}.balance-celebration{color:#fff;z-index:50;background:#22c55e;border-radius:30px;align-items:center;gap:10px;padding:12px 28px;font-size:18px;font-weight:900;animation:.3s cubic-bezier(.34,1.56,.64,1) pop-up;display:flex;position:fixed;bottom:120px;left:50%;transform:translate(-50%);box-shadow:0 6px 20px #22c55e66}@keyframes pop-up{0%{opacity:0;transform:translate(-50%)scale(.5)}to{opacity:1;transform:translate(-50%)scale(1)}}\n/*$vite$:1*/"};
var e = (() => {
	if (typeof window < "u") {
		if (window.__RION_MATH__ && window.__RION_MATH__.React) return window.__RION_MATH__.React;
		if (window.React) return window.React;
	}
	throw Error("Rion React packs must be opened through the console shared React runtime.");
})(), t = (...t) => e.useState(...t), n = (...t) => e.useEffect(...t), r = (...t) => e.useCallback(...t);
e.Fragment;
function i(t, n, r) {
	let { children: i, ...a } = n || {}, o = r === void 0 ? a : {
		...a,
		key: r
	};
	return i === void 0 ? e.createElement(t, o) : Array.isArray(i) ? e.createElement(t, o, ...i) : e.createElement(t, o, i);
}
var a = i, o = {
	1: {
		value: 1,
		color: "#fef08a",
		borderColor: "#ca8a04",
		label: "1"
	},
	2: {
		value: 2,
		color: "#f87171",
		borderColor: "#dc2626",
		label: "2"
	},
	3: {
		value: 3,
		color: "#86efac",
		borderColor: "#16a34a",
		label: "3"
	},
	4: {
		value: 4,
		color: "#f472b6",
		borderColor: "#db2777",
		label: "4"
	},
	5: {
		value: 5,
		color: "#fbbf24",
		borderColor: "#d97706",
		label: "5"
	},
	6: {
		value: 6,
		color: "#2dd4bf",
		borderColor: "#0d9488",
		label: "6"
	},
	7: {
		value: 7,
		color: "#c084fc",
		borderColor: "#9333ea",
		label: "7"
	},
	8: {
		value: 8,
		color: "#fb923c",
		borderColor: "#ea580c",
		label: "8"
	},
	9: {
		value: 9,
		color: "#60a5fa",
		borderColor: "#2563eb",
		label: "9"
	},
	10: {
		value: 10,
		color: "#a3e635",
		borderColor: "#65a30d",
		label: "10"
	}
};
function s(e, t) {
	if (e === t) return 0;
	let n = t - e;
	return Math.max(-5, Math.min(5, n)) / 5 * 12;
}
function c(e, t) {
	return e === t ? "=" : e < t ? "<" : ">";
}
function l(e, t = 1) {
	let n = 1, r = () => `rod_${Date.now()}_${n++}`;
	if (e === "sandbox") return {
		mode: "sandbox",
		targetWeight: 0,
		leftRods: [],
		rightInitialRods: [],
		guideText: "자유롭게 양쪽에 수 막대를 올려 시소의 움직임을 관찰해 보세요!"
	};
	if (e === "basic") {
		let e = t <= 2 ? [
			3,
			4,
			5,
			6
		] : [
			6,
			7,
			8,
			9,
			10
		], n = e[Math.floor(Math.random() * e.length)];
		return {
			mode: "basic",
			targetWeight: n,
			leftRods: [{
				id: r(),
				value: n,
				fixed: !0
			}],
			rightInitialRods: [],
			guideText: `왼쪽 무게(${n})와 똑같아지도록 오른쪽에 수 막대를 올려보세요!`
		};
	}
	if (e === "missing") {
		let e = t <= 2 ? [
			5,
			6,
			7
		] : [
			7,
			8,
			9,
			10
		], n = e[Math.floor(Math.random() * e.length)], i = Math.floor(Math.random() * (n - 2)) + 1;
		return {
			mode: "missing",
			targetWeight: n,
			leftRods: [{
				id: r(),
				value: n,
				fixed: !0
			}],
			rightInitialRods: [{
				id: r(),
				value: i,
				fixed: !0
			}],
			guideText: `오른쪽에 어떤 막대를 더 올리면 시소가 평평해질까요? (${i} + □ = ${n})`
		};
	}
	let i = [
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20
	], a = i[Math.floor(Math.random() * i.length)], o = a - 10, s = [{
		id: r(),
		value: 10,
		fixed: !0
	}];
	return o > 0 && s.push({
		id: r(),
		value: o,
		fixed: !0
	}), {
		mode: "challenge20",
		targetWeight: a,
		leftRods: s,
		rightInitialRods: [],
		guideText: `큰 수 ${a} 무게를 맞추어 보세요! 10 막대와 낱개 막대를 활용해 볼까요?`
	};
}
function u(e) {
	return e.reduce((e, t) => e + t.value, 0);
}
// src/packs/packAudioShim.ts
function d() {
	if (typeof window < "u") return window.__RION_MATH__?.audio;
}
async function f(e) {
	await d()?.playAudio(e);
}
// src/packs/balanceScale/BalanceScalePack.tsx
function p({ onExit: e }) {
	let [d, p] = t("basic"), [m, h] = t(1), [g, _] = t(() => l("basic", 1)), [v, y] = t(() => g.leftRods), [b, x] = t(() => g.rightInitialRods), [S, C] = t("right"), [w, T] = t(0), [E, D] = t(!1), O = u(v), k = u(b), A = O > 0 && O === k, j = s(O, k), M = c(O, k), N = r((e) => {
		let t = l(e || d, m);
		_(t), y(t.leftRods), x(t.rightInitialRods), D(!1);
	}, [d, m]), P = (e) => {
		e !== d && (p(e), h(1), T(0), N(e));
	}, F = (e) => {
		if (A && d !== "sandbox") return;
		let t = {
			id: `rod_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
			value: e
		};
		d === "sandbox" && S === "left" ? y((e) => [...e, t]) : x((e) => [...e, t]), f("drop");
	}, I = (e, t, n) => {
		n || (e === "left" ? y((e) => e.filter((e) => e.id !== t)) : x((e) => e.filter((e) => e.id !== t)), D(!1), f("pop"));
	};
	return n(() => {
		A && !E && (D(!0), T((e) => {
			let t = e + 1;
			return t >= 3 && m < 3 && h((e) => e + 1), t;
		}), f("correct"));
	}, [
		A,
		E,
		m
	]), /* @__PURE__ */ a("div", {
		className: "balance-pack",
		children: [
			/* @__PURE__ */ a("header", {
				className: "balance-header",
				children: [/* @__PURE__ */ a("div", {
					className: "balance-header-left",
					children: [/* @__PURE__ */ i("button", {
						className: "balance-exit-btn",
						onClick: e,
						"aria-label": "메인으로 나가기",
						children: "⬅ 나가기"
					}), /* @__PURE__ */ a("div", {
						className: "balance-title-group",
						children: [/* @__PURE__ */ a("h1", { children: [/* @__PURE__ */ i("span", { children: "⚖️" }), " 시소 저울과 수 막대"] }), /* @__PURE__ */ i("p", { children: "시소가 평평해지도록 양쪽 무게를 맞춰보아요!" })]
					})]
				}), /* @__PURE__ */ a("div", {
					className: "balance-header-right",
					children: [w > 0 && /* @__PURE__ */ a("div", {
						style: {
							fontSize: "15px",
							fontWeight: 900,
							color: "#f59e0b",
							marginRight: "6px"
						},
						children: [
							"⭐ ",
							w,
							"연속 성공!"
						]
					}), /* @__PURE__ */ i("button", {
						className: "balance-btn balance-btn-primary",
						onClick: () => N(),
						children: "🎲 다른 문제"
					})]
				})]
			}),
			/* @__PURE__ */ a("nav", {
				className: "balance-mode-bar",
				"aria-label": "놀이 모드 선택",
				children: [
					/* @__PURE__ */ i("button", {
						className: `balance-mode-btn ${d === "basic" ? "active" : ""}`,
						onClick: () => P("basic"),
						children: "🌟 1~10 수 맞추기"
					}),
					/* @__PURE__ */ i("button", {
						className: `balance-mode-btn ${d === "missing" ? "active" : ""}`,
						onClick: () => P("missing"),
						children: "❓ 빈자리 찾기"
					}),
					/* @__PURE__ */ i("button", {
						className: `balance-mode-btn ${d === "challenge20" ? "active" : ""}`,
						onClick: () => P("challenge20"),
						children: "🚀 20까지 큰 수"
					}),
					/* @__PURE__ */ i("button", {
						className: `balance-mode-btn ${d === "sandbox" ? "active" : ""}`,
						onClick: () => P("sandbox"),
						children: "🎨 자유 실험"
					})
				]
			}),
			/* @__PURE__ */ i("div", {
				className: "balance-guide-banner",
				children: g.guideText
			}),
			/* @__PURE__ */ i("main", {
				className: "seesaw-stage",
				children: /* @__PURE__ */ a("div", {
					className: "seesaw-container",
					children: [
						/* @__PURE__ */ a("svg", {
							className: "seesaw-pivot-base",
							viewBox: "0 0 80 90",
							children: [/* @__PURE__ */ i("polygon", {
								points: "40,15 5,85 75,85",
								fill: "#475569",
								stroke: "#1e293b",
								strokeWidth: "4"
							}), /* @__PURE__ */ i("circle", {
								cx: "40",
								cy: "18",
								r: "10",
								fill: "#38bdf8",
								stroke: "#0284c7",
								strokeWidth: "3"
							})]
						}),
						/* @__PURE__ */ a("div", {
							className: "seesaw-beam-wrapper",
							style: { transform: `rotate(${j}deg)` },
							children: [
								/* @__PURE__ */ i("div", { className: "seesaw-beam-line" }),
								/* @__PURE__ */ i("div", {
									className: `seesaw-center-indicator ${A ? "balanced" : "tilted"}`,
									style: { transform: `translateX(-50%) rotate(${-j}deg)` },
									children: A ? "🎉 똑같아요 (=)" : M === ">" ? "왼쪽이 무거워요" : "오른쪽이 무거워요"
								}),
								/* @__PURE__ */ a("div", {
									className: "seesaw-pan seesaw-pan-left",
									style: { transform: `rotate(${-j}deg)` },
									children: [/* @__PURE__ */ i("div", {
										className: `seesaw-pan-basket target-pan ${v.length === 0 ? "empty" : ""}`,
										onClick: () => d === "sandbox" && C("left"),
										style: { outline: d === "sandbox" && S === "left" ? "3px solid #0284c7" : "none" },
										children: v.map((e) => {
											let t = o[e.value] || o[1];
											return /* @__PURE__ */ a("div", {
												className: `number-rod ${e.fixed ? "fixed" : ""}`,
												style: {
													backgroundColor: t.color,
													borderColor: t.borderColor
												},
												onClick: (t) => {
													t.stopPropagation(), I("left", e.id, e.fixed);
												},
												title: e.fixed ? "고정된 수" : "터치하여 빼기",
												children: [
													/* @__PURE__ */ i("div", {
														className: "number-rod-grid",
														children: Array.from({ length: e.value }).map((e, t) => /* @__PURE__ */ i("div", { className: "number-rod-cell" }, t))
													}),
													/* @__PURE__ */ i("span", {
														className: "number-rod-val",
														children: e.value
													}),
													!e.fixed && /* @__PURE__ */ i("span", {
														className: "number-rod-remove",
														children: "✕"
													})
												]
											}, e.id);
										})
									}), /* @__PURE__ */ a("div", {
										className: "seesaw-pan-badge",
										children: ["왼쪽: ", O]
									})]
								}),
								/* @__PURE__ */ a("div", {
									className: "seesaw-pan seesaw-pan-right",
									style: { transform: `rotate(${-j}deg)` },
									children: [/* @__PURE__ */ i("div", {
										className: `seesaw-pan-basket answer-pan ${b.length === 0 ? "empty" : ""}`,
										onClick: () => d === "sandbox" && C("right"),
										style: { outline: d === "sandbox" && S === "right" ? "3px solid #16a34a" : "none" },
										children: b.map((e) => {
											let t = o[e.value] || o[1];
											return /* @__PURE__ */ a("div", {
												className: `number-rod ${e.fixed ? "fixed" : ""}`,
												style: {
													backgroundColor: t.color,
													borderColor: t.borderColor
												},
												onClick: (t) => {
													t.stopPropagation(), I("right", e.id, e.fixed);
												},
												title: e.fixed ? "고정된 수" : "터치하여 빼기",
												children: [
													/* @__PURE__ */ i("div", {
														className: "number-rod-grid",
														children: Array.from({ length: e.value }).map((e, t) => /* @__PURE__ */ i("div", { className: "number-rod-cell" }, t))
													}),
													/* @__PURE__ */ i("span", {
														className: "number-rod-val",
														children: e.value
													}),
													!e.fixed && /* @__PURE__ */ i("span", {
														className: "number-rod-remove",
														children: "✕"
													})
												]
											}, e.id);
										})
									}), /* @__PURE__ */ a("div", {
										className: "seesaw-pan-badge",
										children: ["오른쪽: ", k]
									})]
								})
							]
						}),
						/* @__PURE__ */ a("div", {
							className: "balance-formula-bar",
							children: [
								/* @__PURE__ */ i("div", {
									className: "balance-formula-side",
									children: v.length > 0 ? v.map((e) => e.value).join(" + ") : "0"
								}),
								/* @__PURE__ */ i("div", {
									className: `balance-formula-rel ${A ? "eq" : "diff"}`,
									children: M
								}),
								/* @__PURE__ */ i("div", {
									className: "balance-formula-side",
									children: b.length > 0 ? b.map((e) => e.value).join(" + ") : "0"
								})
							]
						})
					]
				})
			}),
			A && /* @__PURE__ */ a("aside", {
				className: "balance-celebration",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ i("span", { children: "🎉" }),
					/* @__PURE__ */ i("span", { children: "양쪽 무게가 똑같아졌어요! 딩동댕!" }),
					/* @__PURE__ */ i("button", {
						className: "balance-btn balance-btn-primary",
						style: {
							marginLeft: "12px",
							padding: "6px 14px",
							backgroundColor: "#15803d"
						},
						onClick: () => N(),
						children: "다음 문제 ➔"
					})
				]
			}),
			/* @__PURE__ */ a("footer", {
				className: "rods-palette",
				children: [/* @__PURE__ */ a("div", {
					className: "rods-palette-header",
					children: [/* @__PURE__ */ a("div", {
						className: "rods-palette-title",
						children: [/* @__PURE__ */ i("span", { children: "📦 수 막대를 골라 시소에 올려보세요:" }), d === "sandbox" && /* @__PURE__ */ a("span", {
							style: {
								fontSize: "13px",
								color: "#0284c7",
								marginLeft: "8px"
							},
							children: [
								"(현재 올릴 접시: ",
								S === "left" ? "왼쪽 접시 🔵" : "오른쪽 접시 🟢",
								")"
							]
						})]
					}), /* @__PURE__ */ i("div", {
						className: "rods-palette-actions",
						children: /* @__PURE__ */ i("button", {
							className: "balance-btn balance-btn-secondary",
							onClick: () => {
								x(g.rightInitialRods), D(!1);
							},
							children: "🔄 비우기"
						})
					})]
				}), /* @__PURE__ */ i("div", {
					className: "rods-palette-grid",
					children: [
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						10
					].map((e) => {
						let t = o[e];
						return /* @__PURE__ */ a("button", {
							className: "rod-palette-btn",
							style: {
								backgroundColor: t.color,
								borderColor: t.borderColor
							},
							onClick: () => F(e),
							"aria-label": `수 막대 ${e} 올리기`,
							children: [/* @__PURE__ */ i("span", {
								className: "rod-palette-label",
								children: e
							}), /* @__PURE__ */ i("div", {
								className: "rod-palette-blocks",
								children: Array.from({ length: Math.min(e, 5) }).map((e, t) => /* @__PURE__ */ i("div", { className: "rod-palette-dot" }, t))
							})]
						}, e);
					})
				})]
			})
		]
	});
}
// src/packs/entries/balance-scale.ts
var m = p;
export { m as default };
