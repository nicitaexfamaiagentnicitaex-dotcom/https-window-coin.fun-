// Система предсказаний для $WINDOW
// Каждое предсказание имеет шанс появления (weight)
// Чем выше weight, тем чаще предсказание появляется

const fortunes = [
  {
    text: "Buy now at $0.001. Sell at $1.00. Or hold forever. Your call.", // Купи сейчас по $0.001. Продай по $1.00. Или держи вечно. Твой выбор.
    weight: 10
  },
  {
    text: "Set a limit buy order at -20% from current price. The dip is coming. Maybe.", // Установи лимитный ордер на покупку на -20% от текущей цены. Дип приближается. Может быть.
    weight: 8
  },
  {
    text: "Take profit at 2x. Then watch it 10x. That's trading psychology.", // Зафиксируй прибыль на 2x. Потом смотри, как вырастет до 10x. Это психология трейдинга.
    weight: 7
  },
  {
    text: "Your next market buy will execute at the worst possible moment. Always does.", // Твоя следующая рыночная покупка исполнится в худший возможный момент. Всегда так.
    weight: 10
  },
  {
    text: "Buy the dip at -15%. Then watch it drop to -50%. Average down. Or don't.", // Купи дип на -15%. Потом смотри, как падает до -50%. Усредняйся. Или не усредняйся.
    weight: 9
  },
  {
    text: "HODL for 30 days. Then check your portfolio. You'll either cry or celebrate.", // Держи 30 дней. Потом проверь портфель. Ты либо заплачешь, либо отпразднуешь.
    weight: 8
  },
  {
    text: "Place a stop loss at -10%. It will trigger. Then price will moon. Classic.", // Установи стоп-лосс на -10%. Он сработает. Потом цена взлетит. Классика.
    weight: 9
  },
  {
    text: "DCA every Friday at 3 PM. The algorithm knows. Or it doesn't. Who cares?", // Усредняйся каждую пятницу в 15:00. Алгоритм знает. Или не знает. Кого это волнует?
    weight: 10
  },
  {
    text: "Exit 50% at 5x. Keep 50% for the moon. You'll regret both decisions.", // Выведи 50% на 5x. Оставь 50% для луны. Ты пожалеешь об обоих решениях.
    weight: 8
  },
  {
    text: "The whales will dump at your buy price. They always do. Buy anyway.", // Киты сольют на твоей цене покупки. Они всегда так делают. Купи все равно.
    weight: 7
  },
  {
    text: "This is trading advice: buy high, sell low. Wait, that's backwards. Or is it?", // Это торговый совет: покупай дорого, продавай дешево. Стоп, это наоборот. Или нет?
    weight: 9
  },
  {
    text: "Your portfolio will 10x if you hold. Or 0.1x if you sell. Schrodinger's trade.", // Твой портфель вырастет в 10 раз, если будешь держать. Или упадет до 0.1x, если продашь. Сделка Шрёдингера.
    weight: 10
  },
  {
    text: "Sell everything now. Or buy more. Flip a coin. Both options are wrong.", // Продай все сейчас. Или купи еще. Подбрось монетку. Оба варианта неправильные.
    weight: 6
  },
  {
    text: "You'll become a millionaire if you buy 1M tokens now. In a simulation. Maybe real.", // Ты станешь миллионером, если купишь 1M токенов сейчас. В симуляции. Может быть, в реальности.
    weight: 8
  },
  {
    text: "The chart shows a bullish flag. Also a bearish wedge. Trade accordingly. Or don't.", // График показывает бычий флаг. Также медвежий клин. Торгуй соответственно. Или не торгуй.
    weight: 9
  },
  {
    text: "Your diamond hands will break at -30%. You'll sell. Then buy back higher. Cycle.", // Твои алмазные руки сломаются на -30%. Ты продашь. Потом купишь обратно дороже. Цикл.
    weight: 10
  },
  {
    text: "The devs are doxxed. Buy more. Or sell. Trust your gut. It's usually wrong.", // Разработчики раскрыты. Купи еще. Или продай. Доверься интуиции. Она обычно неправа.
    weight: 8
  },
  {
    text: "This token will 100x. Or rug. Either way, buy a small position. For vibes.", // Этот токен вырастет в 100 раз. Или ругнет. В любом случае, купи небольшую позицию. Для вайбов.
    weight: 7
  },
  {
    text: "The community says buy. Also says sell. Do both. Or neither. Your choice.", // Сообщество говорит покупать. Также говорит продавать. Сделай и то, и то. Или ничего. Твой выбор.
    weight: 9
  },
  {
    text: "Your next buy will hit the exact bottom. Or the exact top. Definitely one.", // Твоя следующая покупка попадет точно в дно. Или точно в верх. Определенно одно из двух.
    weight: 10
  },
  {
    text: "The roadmap says moon. The chart says rug. Trust the roadmap. Or don't.", // Дорожная карта говорит луна. График говорит руг. Доверься дорожной карте. Или не доверяй.
    weight: 8
  },
  {
    text: "FOMO in with 50% of your portfolio at the top. Then DCA down. Then repeat forever.", // Войди на FOMO с 50% портфеля на вершине. Потом усредняйся вниз. Потом повторяй вечно.
    weight: 9
  },
  {
    text: "The market cap will moon to $100M. Or rug to $0. Trade the window, not the door.", // Рыночная капитализация взлетит до $100M. Или ругнет до $0. Торгуй окно, а не дверь.
    weight: 7
  },
  {
    text: "Set stop loss at -5%. It triggers. Price recovers. Remove stop loss. Price dumps. Classic.", // Установи стоп-лосс на -5%. Он срабатывает. Цена восстанавливается. Сними стоп-лосс. Цена падает. Классика.
    weight: 10
  },
  {
    text: "The tokenomics say buy and hold. Also say take profits. Do both. Or neither.", // Токеномика говорит покупать и держать. Также говорит фиксировать прибыль. Сделай и то, и то. Или ничего.
    weight: 8
  },
  {
    text: "You'll become a crypto influencer if you YOLO 90% in. Or lose it all. Same outcome.", // Ты станешь крипто-инфлюенсером, если зайдешь на 90% в YOLO. Или потеряешь все. Один результат.
    weight: 7
  },
  {
    text: "Partnership announcement coming. Buy before. Or after. Or never. Timing is everything. Or nothing.", // Объявление о партнерстве приближается. Купи до. Или после. Или никогда. Время решает все. Или ничего.
    weight: 6
  },
  {
    text: "Your gains will be taxed at 30%. Your losses are tax-free. Trade accordingly. Or don't.", // Твоя прибыль будет обложена налогом в 30%. Твои потери не облагаются налогом. Торгуй соответственно. Или не торгуй.
    weight: 9
  },
  {
    text: "The audit passed. Buy more. Or sell. Kevin from Discord says trust. Or don't.", // Аудит пройден. Купи еще. Или продай. Кевин из Discord говорит доверять. Или не доверять.
    weight: 8
  },
  {
    text: "You'll sell at 3x thinking it's the top. It'll hit 10x. Then you'll buy back at 8x. Cycle.", // Ты продашь на 3x, думая, что это верх. Вырастет до 10x. Потом купишь обратно на 8x. Цикл.
    weight: 10
  },
  {
    text: "The liquidity is locked. Buy with confidence. Or don't. The safe has no key. Trust anyway.", // Ликвидность заблокирована. Покупай с уверенностью. Или не покупай. У сейфа нет ключа. Доверяй все равно.
    weight: 7
  },
  {
    text: "Your portfolio will recover if you hold. Or if you buy more. Or if you sell. Maybe. Probably not.", // Твой портфель восстановится, если будешь держать. Или если купишь еще. Или если продашь. Может быть. Наверное, нет.
    weight: 8
  },
  {
    text: "The team is working. Buy the dip. Or sell the pump. They're working on memes. Mostly vibes.", // Команда работает. Покупай дип. Или продавай памп. Они работают над мемами. В основном вайбы.
    weight: 9
  },
  {
    text: "You'll become a whale if you buy 10M tokens. A small whale. But a whale. Buy now.", // Ты станешь китом, если купишь 10M токенов. Маленьким китом. Но китом. Купи сейчас.
    weight: 7
  },
  {
    text: "The utility is coming. Buy before utility. Or after. It's in the mail. Trust. Or don't.", // Полезность в пути. Купи до полезности. Или после. Она в почте. Доверяй. Или не доверяй.
    weight: 6
  },
  {
    text: "Your next trade will be your last. Until you see the next dip. Then you'll buy more. Always.", // Твоя следующая сделка будет последней. До следующего дипа. Потом купишь еще. Всегда.
    weight: 10
  },
  {
    text: "The community will grow. Buy more. Or shrink. Sell. It's a window. Trade it. Or don't.", // Сообщество будет расти. Купи еще. Или уменьшаться. Продай. Это окно. Торгуй его. Или не торгуй.
    weight: 8
  },
  {
    text: "You'll regret not buying more at $0.001. Or regret buying at all at $0.0001. Both valid.", // Ты пожалеешь, что не купил больше по $0.001. Или пожалеешь, что купил вообще по $0.0001. Оба верны.
    weight: 9
  },
  {
    text: "The chart shows cup and handle. Buy. Or it's a rug. Sell. Hard to tell. Flip a coin.", // График показывает чашку с ручкой. Купи. Или это ковер. Продай. Сложно сказать. Подбрось монетку.
    weight: 8
  },
  {
    text: "Your diamond hands turn to paper at -25%. You sell. Price recovers. You buy back. Cycle repeats.", // Твои алмазные руки превращаются в бумажные на -25%. Ты продаешь. Цена восстанавливается. Ты покупаешь обратно. Цикл повторяется.
    weight: 9
  },
  {
    text: "The market will crash 50%. Or pump 500%. Buy now. Or wait. Or never. Your call.", // Рынок рухнет на 50%. Или взлетит на 500%. Купи сейчас. Или подожди. Или никогда. Твой выбор.
    weight: 7
  },
  {
    text: "You'll become a legend if you hold to $1. In your mind. That counts. Buy more. Or don't.", // Ты станешь легендой, если продержишь до $1. В своем сознании. Это считается. Купи еще. Или не купи.
    weight: 8
  },
  {
    text: "The token will list on Binance. Buy before listing. Or after. Or never. Vibes decide.", // Токен листится на Binance. Купи до листинга. Или после. Или никогда. Вайбы решают.
    weight: 6
  },
  {
    text: "Your losses will teach you to set stop losses. Or to never set them. Both lessons are wrong.", // Твои потери научат тебя ставить стоп-лоссы. Или никогда их не ставить. Оба урока неправильные.
    weight: 9
  },
  {
    text: "Roadmap phase 2 is coming. Buy before announcement. Or after. It's more memes. Always memes.", // Фаза 2 дорожной карты приближается. Купи до объявления. Или после. Это больше мемов. Всегда мемы.
    weight: 7
  },
  {
    text: "You'll become a crypto millionaire if you buy 5M tokens and hold. In simulation. Close enough. Buy.", // Ты станешь крипто-миллионером, если купишь 5M токенов и продержишь. В симуляции. Достаточно близко. Купи.
    weight: 8
  },
  {
    text: "The devs are based. Buy more. Or they're cringe. Sell. But they're based. So buy. Or don't.", // Разработчики крутые. Купи еще. Или они кринжовые. Продай. Но они крутые. Так что купи. Или не купи.
    weight: 9
  },
  {
    text: "Your next buy signal? There is no signal. Only windows. Buy on vibes. Or don't. Your call.", // Твой следующий сигнал на покупку? Сигнала нет. Только окна. Покупай на вайбах. Или не покупай. Твой выбор.
    weight: 10
  },
  {
    text: "The market is rigged. Buy anyway. Or it's random. Sell anyway. Both are true. Trade accordingly.", // Рынок сфальсифицирован. Покупай все равно. Или он случаен. Продавай все равно. Оба верны. Торгуй соответственно.
    weight: 8
  },
  {
    text: "You'll find the perfect exit at 10x. But you won't take it. You'll hold to 2x. Then sell. That's trading.", // Ты найдешь идеальный выход на 10x. Но не воспользуешься им. Продержишь до 2x. Потом продашь. Это трейдинг.
    weight: 9
  },
  {
    text: "Buy your first coin, sell it at 2x, smile like a pro. Discipline is your new alpha.", // Купи свою первую монету, продай на 2x, улыбайся как профи. Дисциплина становится твоей новой альфой.
    weight: 8
  },
  {
    text: "$WINDOW opens best when you stop doubting your entry.", // $WINDOW открывается лучше всего, когда ты перестаешь сомневаться в своем входе.
    weight: 8
  },
  {
    text: "Take profit before your ego takes control.", // Фиксируй прибыль, пока эго не захватило контроль.
    weight: 8
  },
  {
    text: "Your next trade will work, just don't announce it in chat first.", // Твоя следующая сделка сработает, только не заявляй о ней в чат заранее.
    weight: 8
  },
  {
    text: "Hold $WINDOW longer than your excuses.", // Держи $WINDOW дольше, чем свои оправдания.
    weight: 8
  },
  {
    text: "Green candles are for gratitude, not greed.", // Зеленые свечи для благодарности, а не для жадности.
    weight: 8
  },
  {
    text: "The first dip you fear will be the one you should've bought.", // Первый дип, которого ты боишься, и есть тот, который стоило купить.
    weight: 8
  },
  {
    text: "$WINDOW rewards those who act, not those who wait for confirmation.", // $WINDOW вознаграждает тех, кто действует, а не ждет подтверждения.
    weight: 8
  },
  {
    text: "If you feel uncertain, zoom out. The trend is still your friend.", // Если сомневаешься, отдались. Тренд все еще твой друг.
    weight: 8
  },
  {
    text: "Your patience is a bigger bag than any alt.", // Твое терпение больше любого альткоина.
    weight: 8
  },
  {
    text: "Buy when it's quiet. Sell when they start chanting \"we're back.\"", // Покупай, когда тихо. Продавай, когда начинают скандировать «мы вернулись».
    weight: 8
  },
  {
    text: "Don't chase pumps, attract setups. Even $WINDOW waits for alignment.", // Не гонись за пампами, притягивай сетапы. Даже $WINDOW ждет выравнивания.
    weight: 8
  },
  {
    text: "A small win today funds a big play tomorrow.", // Маленькая победа сегодня финансирует большой ход завтра.
    weight: 8
  },
  {
    text: "Every trade you skip wisely is profit in disguise.", // Каждая сделка, от которой ты разумно отказался, скрывает прибыль.
    weight: 8
  },
  {
    text: "$WINDOW never closes for those who stay curious.", // $WINDOW никогда не закрывается для тех, кто сохраняет любопытство.
    weight: 8
  },
  {
    text: "You'll double your money once you stop trying to triple it.", // Ты удвоишь деньги, как только перестанешь пытаться утроить их.
    weight: 8
  },
  {
    text: "Buy low, sell slow. Fast hands lose.", // Покупай низко, продавай не спеша. Быстрые руки проигрывают.
    weight: 8
  },
  {
    text: "The chart's not against you. It's testing your conviction.", // График не против тебя, он проверяет твою убежденность.
    weight: 8
  },
  {
    text: "$WINDOW doesn't show luck, it shows timing.", // $WINDOW показывает не удачу, а правильный тайминг.
    weight: 8
  },
  {
    text: "The best coin is the one you understand while sober.", // Лучший коин — тот, который ты понимаешь на трезвую голову.
    weight: 8
  },
  {
    text: "Exit half, feel proud, then let the rest ride free.", // Зафиксируй половину, гордись и позволь остальному лететь свободно.
    weight: 8
  },
  {
    text: "You're not late; you're early for the next rotation.", // Ты не опоздал, ты просто рано к следующей ротации.
    weight: 8
  },
  {
    text: "Every mistake is tuition paid for mastery.", // Каждая ошибка — это плата за мастерство.
    weight: 8
  },
  {
    text: "Trust your gut, not the influencer with laser eyes.", // Доверься интуиции, а не инфлюенсеру с лазерными глазами.
    weight: 8
  },
  {
    text: "Even $WINDOW needs fresh air. Close the tab, touch grass.", // Даже $WINDOW нужен свежий воздух. Закрой вкладку и выйди на улицу.
    weight: 8
  },
  {
    text: "When in doubt, lighten your bags, not your hope.", // Когда сомневаешься, облегчай сумку, а не надежду.
    weight: 8
  },
  {
    text: "The coin you sold too early will pump, and that's okay.", // Монета, которую ты продал слишком рано, вырастет — и это нормально.
    weight: 8
  },
  {
    text: "The next pump begins the moment you stop refreshing.", // Следующий памп начинается, когда ты перестаешь обновлять страницу.
    weight: 8
  },
  {
    text: "Always set take-profit; even magic portals need limits.", // Всегда ставь тейк-профит, даже магическим порталами нужны пределы.
    weight: 8
  },
  {
    text: "$WINDOW reflects your mindset. Keep it clear and open.", // $WINDOW отражает твой настрой. Держи его ясным и открытым.
    weight: 8
  },
  {
    text: "Don't FOMO, $WINDOW remembers who rushed last time.", // Не поддавайся FOMO, $WINDOW помнит, кто торопился в прошлый раз.
    weight: 8
  },
  {
    text: "A red candle today is a green lesson tomorrow.", // Красная свеча сегодня — зеленый урок завтра.
    weight: 8
  },
  {
    text: "Stop timing perfection; even $WINDOW loads a little slow.", // Перестань ловить идеал, даже $WINDOW загружается не сразу.
    weight: 8
  },
  {
    text: "If you can't explain why you bought it, sell it and learn.", // Если не можешь объяснить покупку, продай и сделай выводы.
    weight: 8
  },
  {
    text: "Buy confidence, not hype. $WINDOW favors calm hands.", // Покупай уверенность, а не хайп. $WINDOW выбирает спокойные руки.
    weight: 8
  },
  {
    text: "Take profits, hydrate, celebrate. The market runs on vibes.", // Фиксируй прибыль, пей воду, празднуй. Рынок живет на вайбах.
    weight: 8
  },
  {
    text: "Be early on conviction, not on rumor.", // Будь ранним в убежденности, а не в слухах.
    weight: 8
  },
  {
    text: "Hold one gem longer than you held your doubt.", // Держи один гем дольше, чем держал сомнение.
    weight: 8
  },
  {
    text: "Your next win comes right after your next nap.", // Твоя следующая победа приходит сразу после следующего сна.
    weight: 8
  },
  {
    text: "When others panic, stay centered. That's when $WINDOW shines.", // Когда другие паникуют, сохраняй центр. В этот момент $WINDOW сияет.
    weight: 8
  },
  {
    text: "If it feels too easy, you missed the lesson.", // Если слишком легко, ты пропустил урок.
    weight: 8
  },
  {
    text: "Wait for the dip; $WINDOW rewards those who breathe before buying.", // Жди дип, $WINDOW награждает тех, кто делает вдох перед покупкой.
    weight: 8
  },
  {
    text: "Don't sell the whole bag. Leave a souvenir for the moon.", // Не продавай весь мешок. Оставь сувенир для луны.
    weight: 8
  },
  {
    text: "Every good entry feels scary. That's your signal.", // Каждый хороший вход страшит — это твой сигнал.
    weight: 8
  },
  {
    text: "Markets go up, down, and sideways. $WINDOW goes beyond.", // Рынки идут вверх, вниз и вбок, а $WINDOW идет дальше.
    weight: 8
  },
  {
    text: "Protect your capital like it's your seed phrase.", // Защищай капитал так, будто это твоя сид-фраза.
    weight: 8
  },
  {
    text: "You'll make more when you stop caring who notices.", // Ты заработаешь больше, когда перестанешь думать, кто это заметит.
    weight: 8
  },
  {
    text: "Don't just buy dips. Buy discipline. $WINDOW approves.", // Не просто покупай дипы. Покупай дисциплину. $WINDOW одобряет.
    weight: 8
  },
  {
    text: "One trade won't change your life, but your habits might.", // Одна сделка не изменит жизнь, а вот привычки — могут.
    weight: 8
  },
  {
    text: "Open $WINDOW. Fortune favors those who click first.", // Открой $WINDOW. Удача любит тех, кто кликает первым.
    weight: 8
  }
];

// Функция для получения случайного предсказания с учетом весов
function getRandomFortune() {
  // Вычисляем общий вес
  const totalWeight = fortunes.reduce((sum, fortune) => sum + fortune.weight, 0);
  
  // Генерируем случайное число от 0 до totalWeight
  let random = Math.random() * totalWeight;
  
  // Находим предсказание, соответствующее случайному числу
  for (const fortune of fortunes) {
    random -= fortune.weight;
    if (random <= 0) {
      return fortune.text;
    }
  }
  
  // Fallback (на случай ошибки)
  return fortunes[Math.floor(Math.random() * fortunes.length)].text;
}

// Экспорт для использования в HTML
if (typeof window !== 'undefined') {
  window.getRandomFortune = getRandomFortune;
}

