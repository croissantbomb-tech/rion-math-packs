var e = (() => {
	if (typeof window < "u") {
		if (window.__RION_MATH__ && window.__RION_MATH__.React) return window.__RION_MATH__.React;
		if (window.React) return window.React;
	}
	throw Error("Rion React packs must be opened through the console shared React runtime.");
})(), t = (...t) => e.useState(...t), n = (...t) => e.useEffect(...t);
e.Fragment;
function r(t, n, r) {
	let { children: i, ...a } = n || {}, o = r === void 0 ? a : {
		...a,
		key: r
	};
	return i === void 0 ? e.createElement(t, o) : Array.isArray(i) ? e.createElement(t, o, ...i) : e.createElement(t, o, i);
}
var i = r;
// src/packs/packAudioShim.ts
function a() {
	if (typeof window < "u") return window.__RION_MATH__?.audio;
}
async function o(e) {
	await a()?.playAudio(e);
}
function s() {
	a()?.stopAudio();
}
// src/packs/zeroConcept/ZeroConceptPack.tsx
var c = ({ onExit: e }) => {
	let [a, o] = t("eat");
	return n(() => () => {
		s();
	}, []), /* @__PURE__ */ i("div", {
		style: {
			width: "100vw",
			height: "100vh",
			backgroundColor: "#fef7ee",
			display: "flex",
			flexDirection: "column",
			userSelect: "none",
			fontFamily: "system-ui, -apple-system, sans-serif"
		},
		children: [/* @__PURE__ */ i("header", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "12px 20px",
				backgroundColor: "#fff",
				boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
			},
			children: [/* @__PURE__ */ i("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "12px"
				},
				children: [/* @__PURE__ */ r("button", {
					onClick: () => {
						s(), e();
					},
					style: {
						padding: "8px 16px",
						fontSize: "18px",
						fontWeight: "bold",
						borderRadius: "24px",
						border: "2px solid #e0c8b0",
						backgroundColor: "#fff",
						cursor: "pointer",
						color: "#6d4c41"
					},
					children: "← 팩 나가기"
				}), /* @__PURE__ */ i("div", { children: [/* @__PURE__ */ i("h1", {
					style: {
						margin: 0,
						fontSize: "22px",
						color: "#e65100",
						display: "flex",
						alignItems: "center",
						gap: "8px"
					},
					children: [/* @__PURE__ */ r("span", { children: "🥚" }), " 0(영)의 비밀 놀이터"]
				}), /* @__PURE__ */ r("p", {
					style: {
						margin: 0,
						fontSize: "13px",
						color: "#8d6e63"
					},
					children: "아무것도 없는 상태 = 0을 손으로 직접 느껴봐요!"
				})] })]
			}), /* @__PURE__ */ i("nav", {
				style: {
					display: "flex",
					gap: "8px"
				},
				children: [
					/* @__PURE__ */ r(l, {
						active: a === "eat",
						onClick: () => {
							s(), o("eat");
						},
						icon: "🍓",
						label: "사라지는 딸기"
					}),
					/* @__PURE__ */ r(l, {
						active: a === "empty-basket",
						onClick: () => {
							s(), o("empty-basket");
						},
						icon: "🧺",
						label: "0개 바구니 찾기"
					}),
					/* @__PURE__ */ r(l, {
						active: a === "countdown",
						onClick: () => {
							s(), o("countdown");
						},
						icon: "🚀",
						label: "로켓 카운트다운"
					}),
					/* @__PURE__ */ r(l, {
						active: a === "compare",
						onClick: () => {
							s(), o("compare");
						},
						icon: "⚖️",
						label: "0과 비교하기"
					})
				]
			})]
		}), /* @__PURE__ */ i("main", {
			style: {
				flex: 1,
				position: "relative",
				overflow: "hidden"
			},
			children: [
				a === "eat" && /* @__PURE__ */ r(u, {}),
				a === "empty-basket" && /* @__PURE__ */ r(d, {}),
				a === "countdown" && /* @__PURE__ */ r(f, {}),
				a === "compare" && /* @__PURE__ */ r(p, {})
			]
		})]
	});
}, l = ({ active: e, onClick: t, icon: n, label: a }) => /* @__PURE__ */ i("button", {
	onClick: t,
	style: {
		padding: "8px 16px",
		fontSize: "16px",
		fontWeight: "bold",
		borderRadius: "20px",
		border: e ? "2px solid #e65100" : "1px solid #ddd",
		backgroundColor: e ? "#fff3e0" : "#fff",
		color: e ? "#e65100" : "#555",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		gap: "6px",
		transition: "all 0.15s ease"
	},
	children: [/* @__PURE__ */ r("span", { children: n }), /* @__PURE__ */ r("span", { children: a })]
}), u = () => {
	let [e, n] = t(3), [a, s] = t(0), c = e - a, l = (e) => {
		if (e >= c) return;
		let t = c - 1;
		s((e) => e + 1), o(t > 0 ? `num_${t}` : "num_0");
	}, u = (e) => {
		n(e), s(0), o(`num_${e}`);
	};
	return /* @__PURE__ */ i("div", {
		style: {
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			padding: "20px"
		},
		children: [
			/* @__PURE__ */ r("div", {
				style: {
					fontSize: "24px",
					fontWeight: "bold",
					color: "#4e342e",
					marginBottom: "10px"
				},
				children: "딸기를 콕 눌러서 냠냠 먹어볼까?"
			}),
			/* @__PURE__ */ i("div", {
				style: {
					fontSize: "18px",
					color: "#8d6e63",
					marginBottom: "20px"
				},
				children: [
					"남은 딸기: ",
					/* @__PURE__ */ r("strong", {
						style: {
							fontSize: "28px",
							color: c === 0 ? "#e65100" : "#d32f2f"
						},
						children: c
					}),
					"개"
				]
			}),
			/* @__PURE__ */ r("div", {
				style: {
					width: "420px",
					height: "240px",
					borderRadius: "50%",
					backgroundColor: "#ffffff",
					border: "12px solid #ffcc80",
					boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "20px",
					position: "relative"
				},
				children: c === 0 ? /* @__PURE__ */ i("div", {
					style: {
						textAlign: "center",
						animation: "popIn 0.4s ease"
					},
					children: [/* @__PURE__ */ r("div", {
						style: {
							fontSize: "72px",
							fontWeight: "900",
							color: "#e65100"
						},
						children: "0"
					}), /* @__PURE__ */ r("div", {
						style: {
							fontSize: "20px",
							fontWeight: "bold",
							color: "#bf360c"
						},
						children: "접시가 텅 비었어! 아무것도 없으니까 0(영)이야!"
					})]
				}) : Array.from({ length: c }).map((e, t) => /* @__PURE__ */ r("button", {
					onClick: () => l(t),
					style: {
						fontSize: "64px",
						background: "none",
						border: "none",
						cursor: "pointer",
						transform: "scale(1)",
						transition: "transform 0.15s ease",
						outline: "none",
						padding: "10px"
					},
					title: "딸기 먹기",
					children: "🍓"
				}, t))
			}),
			/* @__PURE__ */ i("div", {
				style: {
					marginTop: "40px",
					display: "flex",
					gap: "16px"
				},
				children: [/* @__PURE__ */ r("button", {
					onClick: () => u(3),
					style: {
						padding: "12px 24px",
						fontSize: "18px",
						fontWeight: "bold",
						borderRadius: "24px",
						border: "none",
						backgroundColor: "#ff7043",
						color: "#fff",
						cursor: "pointer",
						boxShadow: "0 4px 10px rgba(255,112,67,0.3)"
					},
					children: "🍓 3개 다시 놓기"
				}), /* @__PURE__ */ r("button", {
					onClick: () => u(5),
					style: {
						padding: "12px 24px",
						fontSize: "18px",
						fontWeight: "bold",
						borderRadius: "24px",
						border: "none",
						backgroundColor: "#ffa726",
						color: "#fff",
						cursor: "pointer",
						boxShadow: "0 4px 10px rgba(255,167,38,0.3)"
					},
					children: "🍓 5개 다시 놓기"
				})]
			})
		]
	});
}, d = () => {
	let [e, n] = t([
		{
			id: 1,
			count: 2
		},
		{
			id: 2,
			count: 0
		},
		{
			id: 3,
			count: 4
		}
	]), [a, s] = t("사탕이 0개(하나도 없는)인 바구니를 찾아보자!"), [c, l] = t(!1), u = (e) => {
		e === 0 ? (l(!0), s("딩동댕! 텅 비어서 아무것도 없으니 0개야!"), o("num_0")) : (l(!1), s(`이 바구니엔 ${e}개가 들어있네! 0개인 바구니는 어디일까?`), o(`num_${e}`));
	};
	return /* @__PURE__ */ i("div", {
		style: {
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			padding: "20px"
		},
		children: [
			/* @__PURE__ */ r("div", {
				style: {
					fontSize: "26px",
					fontWeight: "bold",
					color: c ? "#2e7d32" : "#4e342e",
					marginBottom: "30px",
					textAlign: "center"
				},
				children: a
			}),
			/* @__PURE__ */ r("div", {
				style: {
					display: "flex",
					gap: "30px",
					alignItems: "flex-end"
				},
				children: e.map((e, t) => /* @__PURE__ */ i("button", {
					onClick: () => u(e.count),
					style: {
						width: "180px",
						height: "180px",
						backgroundColor: "#fff",
						borderRadius: "24px",
						border: "4px solid #bcaaa4",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
						transition: "transform 0.15s ease",
						padding: "16px"
					},
					children: [/* @__PURE__ */ r("div", {
						style: {
							fontSize: "36px",
							minHeight: "60px",
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							alignItems: "center"
						},
						children: e.count === 0 ? /* @__PURE__ */ r("span", {
							style: {
								fontSize: "18px",
								color: "#9e9e9e",
								fontWeight: "bold"
							},
							children: "(텅 빔)"
						}) : Array.from({ length: e.count }).map((e, t) => /* @__PURE__ */ r("span", { children: "🍬" }, t))
					}), /* @__PURE__ */ r("div", {
						style: {
							fontSize: "48px",
							marginTop: "8px"
						},
						children: "🧺"
					})]
				}, e.id + "-" + t))
			}),
			/* @__PURE__ */ r("button", {
				onClick: () => {
					let e = [
						0,
						Math.floor(Math.random() * 4) + 1,
						Math.floor(Math.random() * 4) + 1
					];
					e.sort(() => Math.random() - .5), n([
						{
							id: 1,
							count: e[0]
						},
						{
							id: 2,
							count: e[1]
						},
						{
							id: 3,
							count: e[2]
						}
					]), l(!1), s("사탕이 0개(하나도 없는)인 바구니를 찾아보자!");
				},
				style: {
					marginTop: "40px",
					padding: "12px 28px",
					fontSize: "18px",
					fontWeight: "bold",
					borderRadius: "24px",
					border: "none",
					backgroundColor: "#42a5f5",
					color: "#fff",
					cursor: "pointer",
					boxShadow: "0 4px 10px rgba(66,165,245,0.3)"
				},
				children: "🔄 다음 문제 해보기"
			})
		]
	});
}, f = () => {
	let [e, a] = t(10), [s, c] = t(!1);
	return n(() => {
		o("cd_start");
	}, []), /* @__PURE__ */ i("div", {
		style: {
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			padding: "20px"
		},
		children: [
			/* @__PURE__ */ r("div", {
				style: {
					fontSize: "24px",
					fontWeight: "bold",
					color: "#37474f",
					marginBottom: "8px"
				},
				children: "버튼을 콕콕 눌러 거꾸로 세어보자! 0이 되면 발사!"
			}),
			/* @__PURE__ */ i("div", {
				style: {
					fontSize: "18px",
					color: "#78909c",
					marginBottom: "24px"
				},
				children: ["10부터 하나씩 줄어들어 아무것도 안 남을 때: ", /* @__PURE__ */ r("strong", { children: "0" })]
			}),
			/* @__PURE__ */ r("div", {
				style: {
					position: "relative",
					width: "260px",
					height: "260px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBottom: "20px"
				},
				children: s ? /* @__PURE__ */ r("div", {
					style: {
						fontSize: "100px",
						transform: "translateY(-60px) scale(1.3)",
						transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
					},
					children: "🚀💨"
				}) : /* @__PURE__ */ r("div", {
					style: { fontSize: "100px" },
					children: "🚀"
				})
			}),
			/* @__PURE__ */ r("div", {
				style: {
					fontSize: "64px",
					fontWeight: "900",
					color: e === 0 ? "#d32f2f" : "#0288d1",
					marginBottom: "20px"
				},
				children: e === 0 ? "0 (발사!)" : e
			}),
			s ? /* @__PURE__ */ r("button", {
				onClick: () => {
					a(10), c(!1), o("cd_start");
				},
				style: {
					padding: "14px 32px",
					fontSize: "20px",
					fontWeight: "bold",
					borderRadius: "28px",
					border: "none",
					backgroundColor: "#4caf50",
					color: "#fff",
					cursor: "pointer",
					boxShadow: "0 4px 12px rgba(76,175,80,0.3)"
				},
				children: "🚀 다시 10부터 발사하기!"
			}) : /* @__PURE__ */ i("button", {
				onClick: () => {
					if (s) return;
					let t = e - 1;
					a(t), t > 0 ? o(`num_${t}`) : (c(!0), o("cd_done"));
				},
				style: {
					padding: "16px 40px",
					fontSize: "22px",
					fontWeight: "bold",
					borderRadius: "32px",
					border: "none",
					backgroundColor: "#ff5722",
					color: "#fff",
					cursor: "pointer",
					boxShadow: "0 6px 14px rgba(255,87,34,0.3)",
					transform: "scale(1)"
				},
				children: [
					"👇 하나 줄이기 (",
					e,
					" → ",
					e - 1,
					")"
				]
			})
		]
	});
}, p = () => {
	let [e, n] = t(3), [a, s] = t("어느 쪽이 더 많을까? 사과가 많은 쪽을 골라봐!"), [c, l] = t(!1), u = (t) => {
		t ? (s("이쪽은 0개라서 아무것도 없어! 사과가 있는 쪽을 골라볼까?"), o("num_0")) : (s(`딩동댕! 사과 ${e}개는 0개보다 더 많아! (0은 아무것도 없으니까!)`), l(!0), o(`num_${e}`));
	};
	return /* @__PURE__ */ i("div", {
		style: {
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			padding: "20px"
		},
		children: [
			/* @__PURE__ */ r("div", {
				style: {
					fontSize: "24px",
					fontWeight: "bold",
					color: c ? "#2e7d32" : "#3e2723",
					marginBottom: "30px",
					textAlign: "center"
				},
				children: a
			}),
			/* @__PURE__ */ i("div", {
				style: {
					display: "flex",
					gap: "40px",
					alignItems: "center"
				},
				children: [
					/* @__PURE__ */ i("button", {
						onClick: () => u(!0),
						style: {
							width: "200px",
							height: "200px",
							borderRadius: "50%",
							backgroundColor: "#ffffff",
							border: "8px solid #cfd8dc",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
						},
						children: [/* @__PURE__ */ r("div", {
							style: {
								fontSize: "20px",
								color: "#90a4ae",
								fontWeight: "bold"
							},
							children: "(텅 빔)"
						}), /* @__PURE__ */ r("div", {
							style: {
								fontSize: "32px",
								fontWeight: "bold",
								color: "#607d8b",
								marginTop: "10px"
							},
							children: "0개"
						})]
					}),
					/* @__PURE__ */ r("div", {
						style: {
							fontSize: "32px",
							fontWeight: "bold",
							color: "#b0bec5"
						},
						children: "VS"
					}),
					/* @__PURE__ */ i("button", {
						onClick: () => u(!1),
						style: {
							width: "200px",
							height: "200px",
							borderRadius: "50%",
							backgroundColor: "#ffffff",
							border: "8px solid #ffab91",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							boxShadow: "0 8px 16px rgba(0,0,0,0.06)"
						},
						children: [/* @__PURE__ */ r("div", {
							style: {
								fontSize: "36px",
								display: "flex",
								gap: "4px",
								flexWrap: "wrap",
								justifyContent: "center"
							},
							children: Array.from({ length: e }).map((e, t) => /* @__PURE__ */ r("span", { children: "🍎" }, t))
						}), /* @__PURE__ */ i("div", {
							style: {
								fontSize: "32px",
								fontWeight: "bold",
								color: "#d84315",
								marginTop: "10px"
							},
							children: [e, "개"]
						})]
					})
				]
			}),
			c && /* @__PURE__ */ r("button", {
				onClick: () => {
					let e = Math.floor(Math.random() * 5) + 1;
					n(e), s("어느 쪽이 더 많을까? 사과가 많은 쪽을 골라봐!"), l(!1);
				},
				style: {
					marginTop: "36px",
					padding: "12px 28px",
					fontSize: "18px",
					fontWeight: "bold",
					borderRadius: "24px",
					border: "none",
					backgroundColor: "#ff7043",
					color: "#fff",
					cursor: "pointer",
					boxShadow: "0 4px 10px rgba(255,112,67,0.3)"
				},
				children: "다음 문제 풀기 ➔"
			})
		]
	});
}, m = c;
export { m as default };
