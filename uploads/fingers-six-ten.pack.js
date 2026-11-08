var e = (() => {
	if (typeof window < "u") {
		if (window.__RION_MATH__ && window.__RION_MATH__.React) return window.__RION_MATH__.React;
		if (window.React) return window.React;
	}
	throw Error("Rion React packs must be opened through the console shared React runtime.");
})(), t = (...t) => e.useState(...t), n = (...t) => e.useEffect(...t), r = e.Fragment || "React.Fragment";
function i(t, n, r) {
	let { children: i, ...a } = n || {}, o = r === void 0 ? a : {
		...a,
		key: r
	};
	return i === void 0 ? e.createElement(t, o) : Array.isArray(i) ? e.createElement(t, o, ...i) : e.createElement(t, o, i);
}
var a = i, o = 220, s = 272, c = "#f5cea7", l = "#eebd91", u = "#ba8b63", d = "#f2b632", f = [
	{
		name: "엄지",
		bx: 80,
		by: 192,
		w: 28,
		L: 64,
		ang: -58,
		fang: 72
	},
	{
		name: "검지",
		bx: 82,
		by: 124,
		w: 25,
		L: 84,
		ang: -7
	},
	{
		name: "중지",
		bx: 109,
		by: 118,
		w: 26,
		L: 96,
		ang: -1
	},
	{
		name: "약지",
		bx: 135,
		by: 121,
		w: 25,
		L: 88,
		ang: 5
	},
	{
		name: "새끼손가락",
		bx: 160,
		by: 132,
		w: 22,
		L: 66,
		ang: 12
	}
], p = [
	"0,60 56,60 58,165 96,170 140,170 140,232 0,232",
	"56,0 95.5,0 95.5,169.9 58,165 56,60",
	"95.5,0 122,0 122,170 95.5,170",
	"122,0 158.5,0 146,170 122,170",
	"158.5,0 220,0 220,200 146,200 146,170"
], m = ({ side: e, fingers: t, onToggleFinger: n, disabled: m = !1 }) => {
	let h = e === "right", g = e === "left" ? "#7fb069" : "#f2c14e", _ = e === "left" ? "#4f8a3e" : "#c99a1d";
	return /* @__PURE__ */ i("svg", {
		viewBox: `0 0 ${o} ${s}`,
		style: {
			width: "100%",
			maxWidth: "280px",
			height: "auto",
			touchAction: "none",
			userSelect: "none"
		},
		role: "group",
		"aria-label": e === "left" ? "왼손" : "오른손",
		children: /* @__PURE__ */ a("g", {
			transform: h ? `translate(${o},0) scale(-1,1)` : void 0,
			children: [
				/* @__PURE__ */ i("g", {
					className: "ghosts",
					children: f.map((e, n) => {
						if (t[n]) return null;
						let r = n === 0;
						return /* @__PURE__ */ i("g", {
							transform: `translate(${e.bx},${e.by}) rotate(${e.ang})`,
							children: /* @__PURE__ */ i("rect", {
								x: -e.w / 2,
								y: -e.L,
								width: e.w,
								height: e.L + 6,
								rx: e.w / 2,
								fill: r ? "rgba(245,206,167,.42)" : "rgba(245,206,167,.22)",
								stroke: u,
								strokeWidth: r ? 2.4 : 1.8,
								strokeDasharray: r ? "6 4" : "5 5",
								opacity: r ? .85 : .6
							})
						}, `ghost-${n}`);
					})
				}),
				/* @__PURE__ */ i("path", {
					d: "M 92 222 L 156 222 L 153 272 L 95 272 Z",
					fill: c,
					stroke: u,
					strokeWidth: 2.2
				}),
				/* @__PURE__ */ i("rect", {
					x: "89",
					y: "238",
					width: "70",
					height: "17",
					rx: "7",
					fill: g,
					stroke: _,
					strokeWidth: "2"
				}),
				/* @__PURE__ */ i("circle", {
					cx: "124",
					cy: "246.5",
					r: "4",
					fill: "#fffaf0",
					stroke: _,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ i("g", {
					className: "fingers-back",
					children: f.map((e, n) => {
						if (!t[n]) return null;
						let o = n === 0;
						return /* @__PURE__ */ a("g", {
							transform: `translate(${e.bx},${e.by}) rotate(${e.ang})`,
							children: [
								/* @__PURE__ */ i("rect", {
									x: -e.w / 2,
									y: -e.L,
									width: e.w,
									height: e.L + 18,
									rx: e.w / 2,
									fill: "none",
									stroke: d,
									strokeWidth: "8",
									opacity: "0.8"
								}),
								/* @__PURE__ */ i("rect", {
									x: -e.w / 2,
									y: -e.L,
									width: e.w,
									height: e.L + 18,
									rx: e.w / 2,
									fill: c,
									stroke: u,
									strokeWidth: "2.2"
								}),
								o ? /* @__PURE__ */ i("path", {
									d: `M ${-e.w * .3} ${-e.L * .45} Q 0 ${-e.L * .45 + 2.2} ${e.w * .3} ${-e.L * .45}`,
									fill: "none",
									stroke: u,
									strokeWidth: "1.6",
									strokeLinecap: "round",
									opacity: "0.6"
								}) : /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i("path", {
									d: `M ${-e.w * .3} ${-e.L * .34} Q 0 ${-e.L * .34 + 2.2} ${e.w * .3} ${-e.L * .34}`,
									fill: "none",
									stroke: u,
									strokeWidth: "1.6",
									strokeLinecap: "round",
									opacity: "0.6"
								}), /* @__PURE__ */ i("path", {
									d: `M ${-e.w * .3} ${-e.L * .64} Q 0 ${-e.L * .64 + 2.2} ${e.w * .3} ${-e.L * .64}`,
									fill: "none",
									stroke: u,
									strokeWidth: "1.6",
									strokeLinecap: "round",
									opacity: "0.6"
								})] })
							]
						}, `back-ext-${n}`);
					})
				}),
				/* @__PURE__ */ i("path", {
					d: "M 70 130 C 70 117 82 111 96 111 L 150 114 C 166 116 175 128 174 146 C 173 178 169 205 159 228 L 89 228 C 80 216 70 208 65 194 C 60 176 66 150 70 130 Z",
					fill: c,
					stroke: u,
					strokeWidth: "2.4",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ i("path", {
					d: "M 85 168 Q 112 182 138 162",
					fill: "none",
					stroke: u,
					strokeWidth: "1.5",
					strokeLinecap: "round",
					opacity: "0.45"
				}),
				/* @__PURE__ */ i("path", {
					d: "M 96 150 Q 124 165 148 142",
					fill: "none",
					stroke: u,
					strokeWidth: "1.4",
					strokeLinecap: "round",
					opacity: "0.4"
				}),
				/* @__PURE__ */ i("path", {
					d: "M 84 190 Q 104 206 122 222",
					fill: "none",
					stroke: u,
					strokeWidth: "1.5",
					strokeLinecap: "round",
					opacity: "0.4"
				}),
				/* @__PURE__ */ i("g", {
					className: "fingers-front",
					children: f.map((e, n) => {
						if (t[n]) return null;
						if (n === 0) {
							let t = e.w - 3;
							return /* @__PURE__ */ a("g", {
								transform: `translate(${e.bx},${e.by}) rotate(${e.fang ?? 72})`,
								children: [/* @__PURE__ */ i("rect", {
									x: -t / 2,
									y: -42,
									width: t,
									height: 54,
									rx: t / 2,
									fill: l,
									stroke: u,
									strokeWidth: "2.2"
								}), /* @__PURE__ */ i("path", {
									d: `M ${-t * .3} -14 Q 0 -10.5 ${t * .3} -14`,
									fill: "none",
									stroke: u,
									strokeWidth: "1.6",
									strokeLinecap: "round",
									opacity: "0.55"
								})]
							}, `front-folded-${n}`);
						}
						let r = e.w - 2;
						return /* @__PURE__ */ a("g", {
							transform: `translate(${e.bx},${e.by}) rotate(0)`,
							children: [/* @__PURE__ */ i("rect", {
								x: -r / 2,
								y: -13,
								width: r,
								height: 51,
								rx: r / 2,
								fill: l,
								stroke: u,
								strokeWidth: "2.2"
							}), /* @__PURE__ */ i("path", {
								d: `M ${-r * .32} 1 Q 0 4.5 ${r * .32} 1`,
								fill: "none",
								stroke: u,
								strokeWidth: "1.6",
								strokeLinecap: "round",
								opacity: "0.55"
							})]
						}, `front-folded-${n}`);
					})
				}),
				/* @__PURE__ */ i("g", {
					className: "hits",
					children: p.map((e, t) => /* @__PURE__ */ i("polygon", {
						points: e,
						fill: "transparent",
						style: { cursor: m ? "default" : "pointer" },
						onClick: () => {
							!m && n && n(t);
						}
					}, `hit-${t}`))
				})
			]
		})
	});
};
// src/packs/packAudioShim.ts
function h() {
	if (typeof window < "u") return window.__RION_MATH__?.audio;
}
async function g(e) {
	await h()?.playAudio(e);
}
function _() {
	h()?.stopAudio();
}
// src/packs/fingersSixTen/FingersSixTenPack.tsx
var v = [
	{
		target: 6,
		leftTarget: 4,
		rightTarget: 2
	},
	{
		target: 7,
		leftTarget: 4,
		rightTarget: 3
	},
	{
		target: 8,
		leftTarget: 4,
		rightTarget: 4
	},
	{
		target: 9,
		leftTarget: 4,
		rightTarget: 5
	},
	{
		target: 10,
		leftTarget: 5,
		rightTarget: 5
	},
	{
		target: 6,
		leftTarget: 3,
		rightTarget: 3
	},
	{
		target: 7,
		leftTarget: 3,
		rightTarget: 4
	},
	{
		target: 8,
		leftTarget: 3,
		rightTarget: 5
	}
], y = ({ onExit: e }) => {
	let [r, o] = t(0), s = v[r], [c, l] = t([
		!1,
		!1,
		!1,
		!1,
		!1
	]), [u, d] = t([
		!1,
		!1,
		!1,
		!1,
		!1
	]), [f, p] = t("make"), h = c.filter(Boolean).length, y = u.filter(Boolean).length, b = h + y;
	n(() => (l([
		!1,
		!1,
		!1,
		!1,
		!1
	]), d([
		!1,
		!1,
		!1,
		!1,
		!1
	]), p("make"), g(`make_${s.leftTarget}_${s.rightTarget}`), () => {
		_();
	}), [r, s]), n(() => {
		f === "make" && h === s.leftTarget && y === s.rightTarget && (p("ready_move"), s.target === 10 ? g("ready_ten") : g("ready_move"));
	}, [
		f,
		h,
		y,
		s
	]);
	let x = (e) => {
		f !== "done" && l((t) => {
			let n = [...t];
			return n[e] = !n[e], n;
		});
	}, S = (e) => {
		f !== "done" && d((t) => {
			let n = [...t];
			return n[e] = !n[e], n;
		});
	}, C = () => {
		s.target === 10 ? (p("done"), g("done_10")) : (p("moving"), g("move"));
	}, w = (e) => {
		let t = -1;
		t = typeof e == "number" && u[e] ? e : u.lastIndexOf(!0);
		let n = c.indexOf(!1);
		if (t !== -1 && n !== -1) {
			let e = [...u];
			e[t] = !1;
			let r = [...c];
			r[n] = !0, l(r), d(e), g("move"), r.filter(Boolean).length === 5 ? (p("done"), g(`done_${s.target}`)) : p("moving");
		}
	};
	return /* @__PURE__ */ a("div", {
		style: {
			width: "100vw",
			height: "100vh",
			backgroundColor: "#f4fbf7",
			display: "flex",
			flexDirection: "column",
			userSelect: "none",
			fontFamily: "system-ui, -apple-system, sans-serif"
		},
		children: [
			/* @__PURE__ */ a("header", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "12px 24px",
					backgroundColor: "#fff",
					boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
				},
				children: [/* @__PURE__ */ a("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "14px"
					},
					children: [/* @__PURE__ */ i("button", {
						onClick: () => {
							_(), e();
						},
						style: {
							padding: "8px 16px",
							fontSize: "18px",
							fontWeight: "bold",
							borderRadius: "24px",
							border: "2px solid #b2dfdb",
							backgroundColor: "#fff",
							cursor: "pointer",
							color: "#00695c"
						},
						children: "← 팩 나가기"
					}), /* @__PURE__ */ a("div", { children: [/* @__PURE__ */ a("h1", {
						style: {
							margin: 0,
							fontSize: "22px",
							color: "#2e7d32",
							display: "flex",
							alignItems: "center",
							gap: "8px"
						},
						children: [/* @__PURE__ */ i("span", { children: "✋🤚" }), " 한 손 가득 (6~10 손가락 셈)"]
					}), /* @__PURE__ */ i("p", {
						style: {
							margin: 0,
							fontSize: "13px",
							color: "#689f38"
						},
						children: "두 손으로 수를 만들고, 한 손 가득 5를 채워 전체 수를 알아봐요!"
					})] })]
				}), /* @__PURE__ */ a("div", {
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						color: "#2e7d32",
						backgroundColor: "#e8f5e9",
						padding: "6px 16px",
						borderRadius: "16px"
					},
					children: [
						"문제 ",
						r + 1,
						" / ",
						v.length
					]
				})]
			}),
			/* @__PURE__ */ a("div", {
				style: {
					textAlign: "center",
					padding: "14px 20px",
					backgroundColor: "#e8f5e9",
					borderBottom: "1px solid #c8e6c9"
				},
				children: [/* @__PURE__ */ a("div", {
					style: {
						fontSize: "24px",
						fontWeight: "bold",
						color: "#1b5e20"
					},
					children: ["목표 수: ", /* @__PURE__ */ i("span", {
						style: {
							fontSize: "36px",
							color: "#e65100",
							marginLeft: "6px"
						},
						children: s.target
					})]
				}), /* @__PURE__ */ a("div", {
					style: {
						fontSize: "18px",
						color: "#388e3c",
						marginTop: "4px"
					},
					children: [
						f === "make" && `왼손에 ${s.leftTarget}개, 오른손에 ${s.rightTarget}개를 펴 볼까?`,
						f === "ready_move" && "잘 만들었어! 오른손 손가락을 톡 눌러서 왼손으로 보내볼까? ✨",
						f === "moving" && "오른손 손가락을 톡 누르면 왼손으로 쏙 넘어가요! 👈",
						f === "done" && (s.target === 10 ? "두 손 가득 다섯이랑 다섯! 모두 열 개야! 🌟" : `한 손 가득 다섯! 그리고 ${y}, 다 합쳐 ${s.target}이야! 🎉`)
					]
				})]
			}),
			/* @__PURE__ */ a("main", {
				style: {
					flex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "10px 20px"
				},
				children: [
					/* @__PURE__ */ a("div", {
						style: {
							fontSize: "32px",
							fontWeight: "900",
							color: "#2e7d32",
							marginBottom: "20px",
							display: "flex",
							gap: "12px",
							alignItems: "center"
						},
						children: [
							/* @__PURE__ */ i("span", {
								style: { color: "#388e3c" },
								children: h
							}),
							/* @__PURE__ */ i("span", { children: "+" }),
							/* @__PURE__ */ i("span", {
								style: { color: "#f57f17" },
								children: y
							}),
							/* @__PURE__ */ i("span", { children: "=" }),
							/* @__PURE__ */ i("span", {
								style: { color: b === s.target ? "#e65100" : "#888" },
								children: b
							})
						]
					}),
					/* @__PURE__ */ a("div", {
						style: {
							display: "flex",
							gap: "60px",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							maxWidth: "750px"
						},
						children: [/* @__PURE__ */ a("div", {
							style: {
								flex: 1,
								display: "flex",
								flexDirection: "column",
								alignItems: "center"
							},
							children: [
								/* @__PURE__ */ a("div", {
									style: {
										fontSize: "18px",
										fontWeight: "bold",
										color: "#2e7d32",
										marginBottom: "8px"
									},
									children: [
										"왼손 (목표: ",
										f === "done" ? 5 : s.leftTarget,
										"개)"
									]
								}),
								/* @__PURE__ */ i(m, {
									side: "left",
									fingers: c,
									onToggleFinger: f === "make" ? x : void 0
								}),
								/* @__PURE__ */ a("div", {
									style: {
										marginTop: "10px",
										fontSize: "24px",
										fontWeight: "bold",
										color: h === (f === "done" ? 5 : s.leftTarget) ? "#2e7d32" : "#757575"
									},
									children: [h, "개"]
								})
							]
						}), /* @__PURE__ */ a("div", {
							style: {
								flex: 1,
								display: "flex",
								flexDirection: "column",
								alignItems: "center"
							},
							children: [
								/* @__PURE__ */ a("div", {
									style: {
										fontSize: "18px",
										fontWeight: "bold",
										color: "#f57f17",
										marginBottom: "8px"
									},
									children: ["오른손 ", f === "ready_move" || f === "moving" ? "👈 (손가락을 눌러서 보내줘!)" : `(목표: ${f === "done" ? s.target - 5 : s.rightTarget}개)`]
								}),
								/* @__PURE__ */ i(m, {
									side: "right",
									fingers: u,
									onToggleFinger: f === "make" ? S : f === "ready_move" || f === "moving" ? (e) => {
										f === "make" ? S(e) : (f === "ready_move" || f === "moving") && w(e);
									} : void 0
								}),
								/* @__PURE__ */ a("div", {
									style: {
										marginTop: "10px",
										fontSize: "24px",
										fontWeight: "bold",
										color: y === (f === "done" ? s.target - 5 : s.rightTarget) ? "#f57f17" : "#757575"
									},
									children: [y, "개"]
								})
							]
						})]
					}),
					/* @__PURE__ */ a("div", {
						style: {
							marginTop: "24px",
							minHeight: "60px",
							display: "flex",
							alignItems: "center"
						},
						children: [
							f === "ready_move" && /* @__PURE__ */ i("button", {
								onClick: C,
								style: {
									padding: "14px 36px",
									fontSize: "22px",
									fontWeight: "bold",
									borderRadius: "30px",
									border: "none",
									backgroundColor: "#2e7d32",
									color: "#fff",
									cursor: "pointer",
									boxShadow: "0 6px 14px rgba(46,125,50,0.3)",
									animation: "bounce 1s infinite alternate"
								},
								children: "👉 이제 하나씩 옮겨 볼까?"
							}),
							f === "moving" && /* @__PURE__ */ i("button", {
								onClick: () => w(),
								style: {
									padding: "14px 36px",
									fontSize: "22px",
									fontWeight: "bold",
									borderRadius: "30px",
									border: "none",
									backgroundColor: "#00897b",
									color: "#fff",
									cursor: "pointer",
									boxShadow: "0 6px 14px rgba(0,137,123,0.3)"
								},
								children: "👈 오른손에서 왼손으로 하나 보내기!"
							}),
							f === "done" && /* @__PURE__ */ i("button", {
								onClick: () => {
									o((e) => (e + 1) % v.length);
								},
								style: {
									padding: "14px 36px",
									fontSize: "22px",
									fontWeight: "bold",
									borderRadius: "30px",
									border: "none",
									backgroundColor: "#e65100",
									color: "#fff",
									cursor: "pointer",
									boxShadow: "0 6px 14px rgba(230,81,0,0.3)"
								},
								children: "다음 문제 풀기 ➔"
							})
						]
					})
				]
			})
		]
	});
};
export { y as default };
