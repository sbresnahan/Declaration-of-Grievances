// Source-linked editorial record. Last reviewed October 22, 2026.
// Each source headline is a direct external link; descriptions distinguish facts from judgment.
export const grievances = [
  {
    id: 'tariff-costs', category: 'Economic stewardship',
    line: 'He has imposed sweeping import taxes whose costs have fallen chiefly upon American households and businesses.',
    headline: 'Federal Reserve research finds U.S. firms and consumers bore most of the cost of the 2025 tariffs, which also raised consumer prices.',
    summary: 'New York Fed researchers estimated that nearly 90% of the 2025 tariff burden reached U.S. import prices, while Federal Reserve Board economists estimated a 0.8% increase in core personal-consumption prices through February 2026 attributable to tariffs. A separate 2026 Supreme Court decision invalidated the emergency-powers basis for major tariffs. The administration argues tariffs protect American industries and raise revenue; these studies measure costs rather than deciding the net long-run effects of every trade measure.',
    sources: [
      ['Who Is Paying for the 2025 U.S. Tariffs?', 'Federal Reserve Bank of New York', 'Feb. 12, 2026', 'https://libertystreeteconomics.newyorkfed.org/2026/02/who-is-paying-for-the-2025-u-s-tariffs/'],
      ['Detecting Tariff Effects on Consumer Prices in Real Time – Part II', 'Federal Reserve Board', 'Apr. 8, 2026', 'https://www.federalreserve.gov/econres/notes/feds-notes/detecting-tariff-effects-on-consumer-prices-in-real-time-part-II-20260408.html'],
      ['US Supreme Court strikes down Trump’s global tariffs', 'Reuters', 'Feb. 20, 2026', 'https://www.reuters.com/legal/government/us-supreme-court-rejects-trumps-global-tariffs-2026-02-20/']
    ]
  },
  {
    id: 'public-debt', category: 'Economic stewardship',
    line: 'He has signed a fiscal law that increases the public debt while shifting resources away from poorer households.',
    headline: 'Congress’s nonpartisan budget office projected that the 2025 tax-and-spending law would add $3.4 trillion to deficits over ten years.',
    summary: 'The Congressional Budget Office estimated that Public Law 119-21 would reduce federal revenue by $4.5 trillion and direct spending by $1.1 trillion, increasing cumulative deficits by $3.4 trillion through 2034 under its updated January 2025 baseline. CBO separately estimated losses in resources for lower-income households and gains farther up the distribution. Supporters cite tax relief and economic growth; the figures are projections under an explicitly identified baseline, not amounts already borrowed.',
    sources: [
      ['Estimated Budgetary Effects of Public Law 119-21', 'Congressional Budget Office', 'Jul. 21, 2025', 'https://www.cbo.gov/publication/61570'],
      ['Distributional Effects of Public Law 119-21', 'Congressional Budget Office', 'Aug. 11, 2025', 'https://www.cbo.gov/publication/61367']
    ]
  },
  {
    id: 'health-coverage', category: 'Economic stewardship',
    line: 'He has accepted reductions in health coverage that place families, clinics, and rural communities at risk.',
    headline: 'CBO projected that Medicaid-related provisions of the 2025 budget law would leave 7.5 million additional people uninsured by 2034.',
    summary: 'The official estimate for the law’s Medicaid and related chapter is 7.5 million more uninsured in 2034, alongside about $887 billion in projected deficit reduction from that chapter. Wider estimates that include other health-law provisions are larger and should not be confused with this specific figure. Supporters describe the law as addressing eligibility and waste; critics warn about loss of coverage, uncompensated care, and strain on rural providers. These are forecasts, not a count of people already removed from insurance.',
    sources: [
      ['Public Law 119-21: Supplemental Cost Estimate for Medicaid Provisions', 'Congressional Budget Office', 'Oct. 28, 2025', 'https://www.cbo.gov/publication/61837'],
      ['The Changes Coming to the ACA, Medicaid, and Medicare', 'Johns Hopkins Bloomberg School of Public Health', 'Jul. 30, 2025', 'https://publichealth.jhu.edu/2025/the-changes-coming-to-the-aca-medicaid-and-medicare']
    ]
  },
  {
    id: 'domestic-troops', category: 'Constitutional restraint',
    line: 'He has sought to employ the nation’s military against domestic disorder without the exceptional conditions the law requires.',
    headline: 'Federal courts, including the Supreme Court, blocked National Guard deployments to several American cities after finding serious deficiencies in the claimed legal authority.',
    summary: 'The administration federalized or sought to deploy Guard troops in Los Angeles, Portland, Chicago, and other cities to protect personnel and property during immigration protests. A Portland judge appointed by Trump ruled that no rebellion justified the deployment; the Supreme Court declined to authorize the Chicago operation at its preliminary stage. The government cited threats to federal agents, and other deployment disputes had differing procedural outcomes. A preliminary stay is not a final ruling on every deployment.',
    sources: [
      ['US Supreme Court rejects Trump’s military deployment in Chicago area, for now', 'Reuters', 'Dec. 23, 2025', 'https://www.reuters.com/world/us-supreme-court-rejects-trumps-military-deployment-chicago-area-now-2025-12-23/'],
      ['Legal battles mount over Trump’s National Guard deployments to U.S. cities', 'Reuters', 'Oct. 24, 2025', 'https://www.reuters.com/world/us/legal-battles-mount-over-trumps-national-guard-deployments-us-cities-2025-10-24/']
    ]
  },
  {
    id: 'erroneous-deportation', category: 'Constitutional restraint',
    line: 'He has permitted removal of residents without the hearing and process that the Constitution requires.',
    headline: 'The administration acknowledged deporting Kilmar Abrego Garcia in error, while the Supreme Court required it to facilitate his release and due process challenges continued.',
    summary: 'A federal filing acknowledged that Abrego Garcia was sent to El Salvador despite an order protecting him from removal there. The Supreme Court directed the government to facilitate his release from Salvadoran custody, while separately requiring notice and an opportunity to challenge removals under the Alien Enemies Act. The administration says it is enforcing immigration law and disputes some allegations about individual detainees. This entry concerns legal procedure and compliance, not a general claim that noncitizens cannot be deported.',
    sources: [
      ['Due Process and the Abrego Garcia Case', 'FactCheck.org', 'Apr. 17, 2025', 'https://www.factcheck.org/2025/04/due-process-and-the-abrego-garcia-case/'],
      ['Judges warn Trump risks public perception of lawlessness in his fight with courts', 'Reuters', 'Apr. 17, 2025', 'https://www.reuters.com/legal/trump-challenges-judges-probes-compliance-with-deportation-orders-2025-04-17/']
    ]
  },
  {
    id: 'court-orders', category: 'Constitutional restraint',
    line: 'He has presided over agencies repeatedly chastised by federal judges for failing to obey their orders.',
    headline: 'A Minnesota federal judge cited dozens of unfulfilled immigration-related court orders, and a separate judge found probable cause to investigate contempt in deportation flights.',
    summary: 'During a large immigration operation, Chief Judge Patrick Schiltz ordered the ICE director to explain failures to comply with court orders; the immediate hearing was avoided when one wrongfully detained man was released. In another dispute, Judge James Boasberg found probable cause for criminal contempt in connection with flights to El Salvador, though an appellate court paused his ruling. These facts establish serious judicial findings and allegations of noncompliance, not a final contempt conviction.',
    sources: [
      ['US ICE releases man in Minnesota as agency head faced contempt', 'Reuters', 'Jan. 28, 2026', 'https://www.reuters.com/legal/government/us-ice-releases-man-minnesota-agency-head-faced-contempt-2026-01-28/'],
      ['DOJ seeks to bar Minnesota judges from two cases over statements on Trump immigration surge', 'Reuters', 'Oct. 21, 2026', 'https://www.reuters.com/legal/government/doj-seeks-bar-minnesota-judges-two-cases-over-statements-trump-immigration-surge-2026-10-21/']
    ]
  },
  {
    id: 'central-bank', category: 'Institutional independence',
    line: 'He has pressed the independent guardians of monetary policy with threats of official investigation.',
    headline: 'The Justice Department’s criminal probe of Federal Reserve chair Jerome Powell was blocked after a judge deemed the subpoenas an improper attempt to influence interest rates.',
    summary: 'Trump repeatedly urged the central bank to lower rates. Powell said a criminal-investigation threat concerning a costly renovation was intended to influence monetary decisions, a claim the administration disputed. In March 2026, a judge blocked the subpoenas; the government vowed to appeal and later dropped the case. Oversight of public construction spending is legitimate, but central-bank independence protects monetary policy from direct political coercion.',
    sources: [
      ['Statement from Federal Reserve Chair Jerome H. Powell', 'Federal Reserve Board', 'Jan. 11, 2026', 'https://www.federalreserve.gov/newsevents/speech/powell20260111a.htm'],
      ['How DOJ went from investigating Powell to dropping case', 'Reuters', 'Apr. 24, 2026', 'https://www.reuters.com/world/us/how-doj-went-investigating-powell-dropping-case-2026-04-24/']
    ]
  },
  {
    id: 'academic-freedom', category: 'Institutional independence',
    line: 'He has made public research funding a lever for demanding obedience from independent universities.',
    headline: 'A federal judge ruled that the administration unlawfully canceled billions in Harvard research grants amid demands affecting university governance and speech.',
    summary: 'The administration said funding conditions responded to antisemitism and civil-rights concerns on campus—serious matters requiring enforcement under law. Harvard argued the government instead used grants to coerce changes to its hiring, teaching, and governance. A federal judge ruled against roughly $2.2 billion in cancellations in September 2025; the administration pursued an appeal in October 2026. The case is distinct from whether individual universities adequately addressed discrimination.',
    sources: [
      ['Trump administration unlawfully cut Harvard’s funding, US judge rules', 'Reuters', 'Sep. 3, 2025', 'https://www.reuters.com/world/us/trump-administration-unlawfully-cut-harvards-funding-us-judge-rules-2025-09-03/'],
      ['US appeals court weighs Trump’s block on Harvard research funding', 'Reuters', 'Oct. 5, 2026', 'https://www.reuters.com/legal/government/us-appeals-court-weighs-trumps-block-harvard-research-funding-2026-10-05/']
    ]
  },
  {
    id: 'civil-service', category: 'Institutional independence',
    line: 'He has weakened the civil service’s insulation from personal and political command.',
    headline: 'The administration created Schedule Policy/Career to make designated career policy-influencing posts easier to remove, changing long-standing employment protections.',
    summary: 'OPM finalized the new personnel category in February 2026 and issued implementation guidance. The agency characterizes the reform as strengthening performance and accountability while retaining merit principles. Critics warn that removal of ordinary adverse-action protections can make expert public servants dependent on political favor. The documented action is the rule change; a universal purge of every career employee is not established by that rule alone.',
    sources: [
      ['OPM Finalizes Schedule Policy/Career Rule to Strengthen Accountability', 'U.S. Office of Personnel Management', 'Feb. 5, 2026', 'https://www.opm.gov/news/news-releases/opm-finalizes-schedule-policycareer-rule-to-strengthen-accountability/'],
      ['Schedule Policy/Career: Implementation guidance', 'U.S. Office of Personnel Management', 'Feb. 2026', 'https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/schedule-policycareer/']
    ]
  },
  {
    id: 'farm-trade', category: 'Economic stewardship',
    line: 'He has thrown American farm exports into uncertainty, requiring public relief for losses from disrupted trade.',
    headline: 'U.S.–China tariff retaliation sharply reduced agricultural trade, and Washington allocated billions to help farmers weather market and input-cost disruptions.',
    summary: 'Reuters reported USDA figures showing 2025 U.S. agricultural exports to China fell 65.7% year over year to $8.4 billion during the tariff conflict. USDA announced $11 billion in bridge payments for farmers, while the administration later announced additional harvest-fuel relief amid higher diesel costs. Diplomatic negotiations subsequently restored some shipments. Crop prices, energy markets, and farm income have multiple drivers, so not every difficulty can be attributed to a single tariff decision.',
    sources: [
      ['China signals tariff cuts, advances in farm market access after Trump-Xi summit', 'Reuters', 'May 16, 2026', 'https://www.reuters.com/world/china/china-signals-tariff-cuts-advances-farm-market-access-after-trump-xi-summit-2026-05-16/'],
      ['Analysts say China less likely to buy US soy after Supreme Court decision', 'Reuters', 'Feb. 20, 2026', 'https://www.reuters.com/world/china/analysts-say-china-less-likely-buy-us-soy-after-supreme-court-decision-2026-02-20/'],
      ['US to launch $8 billion support program for farmers to offset diesel costs, Trump says', 'Reuters', 'Oct. 20, 2026', 'https://www.reuters.com/world/us/us-launch-8-billion-support-program-farmers-offset-diesel-costs-trump-says-2026-10-20/']
    ]
  },
  {
    id: 'private-gain', category: 'Public trust',
    line: 'He has made the powers of public office inseparable from the enrichment of his household.',
    headline: 'The president and his family have continued to profit from cryptocurrency enterprises while his administration shapes the industry’s rules.',
    summary: 'Reuters reported more than $1.4 billion in 2025 revenue to Trump from family-backed crypto projects, and described a forum at his private club bringing government officials together with financial executives and his family business. Ethics experts differ on the legal questions, but the overlapping financial and official interests are documented.',
    sources: [
      ['Trump invested crypto gains in stocks and bonds, filings show', 'Reuters', 'Jul. 13, 2026', 'https://www.reuters.com/legal/government/trump-invested-crypto-gains-stocks-bonds-filings-show-2026-07-13/'],
      ['Goldman, Nasdaq CEOs to headline Mar-a-Lago crypto “forum” hosted by Don Jr. and Eric Trump', 'Reuters', 'Feb. 17, 2026', 'https://www.reuters.com/world/us/goldman-nasdaq-ceos-headline-mar-a-lago-crypto-forum-hosted-by-don-jr-eric-trump-2026-02-17/'],
      ['Trump agreed to new ethics rules to get a crypto bill across the line. But that might not be enough', 'Associated Press', 'Sep. 14, 2026', 'https://apnews.com/article/091df7e9a6abbe9b01cf7531d2aa6442']
    ]
  },
  {
    id: 'ballroom', category: 'Public trust',
    line: 'He has invited great private fortunes to finance alterations to the people’s house, without full public accounting.',
    headline: 'The White House ballroom has attracted hundreds of millions of dollars from donors, including companies with federal business, under a system criticized for opacity.',
    summary: 'Documents reported by The Washington Post identified roughly $333 million in private commitments. Reuters reported contributions from major technology companies and federal contractors. The White House defends the privately funded project; watchdogs warn that incomplete donor disclosure makes influence difficult to assess. Donations do not, by themselves, prove a quid pro quo.',
    sources: [
      ['Secret documents reveal donors behind $330 million for Trump’s ballroom', 'The Washington Post', 'Oct. 15, 2026', 'https://www.washingtonpost.com/investigations/2026/10/15/secret-documents-reveal-donors-behind-330-million-trumps-ballroom/'],
      ['Nvidia, Apple each gave $25 million for Trump’s ballroom, Washington Post reports', 'Reuters', 'Oct. 15, 2026', 'https://www.reuters.com/world/us/nvidia-apple-each-gave-25-million-trumps-ballroom-washington-post-reports-2026-10-15/']
    ]
  },
  {
    id: 'pardons', category: 'Public trust',
    line: 'He has exercised the mercy of the republic in ways that favor political allies and convicted public officials.',
    headline: 'A Reuters investigation found a sharp partisan imbalance in pardons for public officials, including clemency for people convicted of corruption-related offenses.',
    summary: 'The Constitution gives presidents broad pardon authority. The grievance is about how that discretion has been used and the message it sends about accountability, not a claim that a particular pardon was unlawful.',
    sources: [
      ['In Trump’s pardons for public officials, Republicans win most of the mercy', 'Reuters Investigates', 'Oct. 13, 2026', 'https://www.reuters.com/investigations/trumps-pardons-public-officials-republicans-win-most-mercy-2026-10-13/']
    ]
  },
  {
    id: 'watchdogs', category: 'Public trust',
    line: 'He has removed independent watchers charged to expose waste, misconduct, and abuse.',
    headline: 'The administration dismissed approximately 17 inspectors general shortly after taking office, prompting challenges to the lack of statutory notice and concerns about oversight.',
    summary: 'Inspectors general investigate fraud, waste, and misconduct across federal agencies. The administration carried out mass removals in January 2025, and former watchdogs subsequently sued. The disputes concern the legality of the removal process and the loss of independent scrutiny.',
    sources: [
      ['Trump fires more than a dozen independent inspectors general at government agencies', 'PBS News / AP', 'Jan. 25, 2025', 'https://www.pbs.org/newshour/politics/trump-fires-more-than-a-dozen-independent-inspectors-general-at-government-agencies'],
      ['Government watchdogs fired by Trump sue and ask judge to reinstate them', 'PBS News / AP', 'Feb. 12, 2025', 'https://www.pbs.org/newshour/politics/government-watchdogs-fired-by-trump-sue-and-ask-judge-to-reinstate-them']
    ]
  },
  {
    id: 'prosecution', category: 'The rule of law',
    line: 'He has urged the machinery of justice toward his adversaries, blurring the boundary between law and personal reprisal.',
    headline: 'Federal investigations and prosecutions involving Trump’s critics have followed his public demands for action, raising serious questions about prosecutorial independence.',
    summary: 'Reuters documented probes of political opponents and challenges to the Comey and James prosecutions. The defendants deny wrongdoing and allege vindictive prosecution; prosecutors contest those accounts. The existence of an investigation does not establish that the target committed a crime—or that the case was improperly ordered.',
    sources: [
      ['Powell probe highlights Trump DOJ role as White House enforcer', 'Reuters', 'Jan. 14, 2026', 'https://www.reuters.com/legal/government/powell-probe-highlights-trump-doj-role-white-house-enforcer-2026-01-14/'],
      ['Judges question DOJ bid to revive cases against Trump foes Comey, James', 'Reuters', 'Sep. 15, 2026', 'https://www.reuters.com/legal/government/us-appeals-court-hear-doj-bid-revive-cases-against-trump-foes-comey-james-2026-09-15/'],
      ['US probes Omar’s decades-old immigration paperwork with eye toward deportation, sources say', 'Reuters', 'Oct. 16, 2026', 'https://www.reuters.com/legal/government/us-probes-omars-decades-old-immigration-paperwork-with-eye-toward-deportation-2026-10-16/']
    ]
  },
  {
    id: 'press', category: 'Freedom of expression',
    line: 'He has threatened the broadcasters of unwelcome news with the power of the state.',
    headline: 'Trump has urged license sanctions against broadcasters over editorial decisions, while the FCC has warned that reporting certain polls might implicate regulatory rules.',
    summary: 'Broadcast licenses belong to local stations and revocation requires legal process; the president cannot revoke a network license by declaration. That limitation is central to the grievance: the threats themselves exert pressure on independent journalism.',
    sources: [
      ['FCC commissioner says Trump call to revoke ABC, NBC licenses is unconstitutional', 'Reuters', 'Jul. 17, 2026', 'https://www.reuters.com/business/media-telecom/fcc-commissioner-says-trump-call-revoke-abc-nbc-licenses-is-unconstitutional-2026-07-17/'],
      ['FCC chair says broadcast networks could violate regulatory obligations by airing “fake polls”', 'Reuters', 'Oct. 21, 2026', 'https://www.reuters.com/business/media-telecom/fcc-chair-says-broadcast-networks-could-violate-regulatory-obligations-by-airing-2026-10-21/']
    ]
  },
  {
    id: 'public-media', category: 'Freedom of expression',
    line: 'He has sought to extinguish institutions established to inform the public without commercial or partisan command.',
    headline: 'After Trump pressed to strip federal support from public broadcasting, Congress rescinded funding and the Corporation for Public Broadcasting moved toward closure.',
    summary: 'The White House alleged bias and waste; supporters of public broadcasting warned of losses to local journalism, educational programming, and emergency information. Congress enacted the rescission in July 2025.',
    sources: [
      ['Trump signs bill canceling $9 billion in foreign aid and public broadcasting funding', 'PBS News', 'Jul. 24, 2025', 'https://www.pbs.org/newshour/politics/trump-signs-bill-canceling-9-billion-in-foreign-aid-and-public-broadcasting-funding'],
      ['CPB says it is shutting down after being defunded by Congress, targeted by Trump', 'PBS News / AP', 'Aug. 1, 2025', 'https://www.pbs.org/newshour/amp/politics/cpb-says-it-is-shutting-down-after-being-defunded-by-congress-targeted-by-trump']
    ]
  },
  {
    id: 'voter-doors', category: 'The franchise',
    line: 'He has sent armed agents to the doors of residents to demand an account of their citizenship and their votes.',
    headline: 'A CBS News investigation found armed DHS personnel conducting door-to-door checks about immigration status, voter registration, and voting history ahead of the midterms.',
    summary: 'DHS says its operations seek unlawful noncitizen voting; critics describe them as intimidating and an extraordinary intrusion into state election administration. The investigations span multiple states. The mere presence of an agent at a door is not proof that an eligible voter was prevented from voting.',
    sources: [
      ['Federal agents knock on doors to track down possible noncitizen voters ahead of midterms', 'CBS News', 'Oct. 21, 2026', 'https://www.cbsnews.com/news/federal-agents-seek-noncitizen-voters/'],
      ['How ICE Is Targeting the 2026 Midterms', 'The New Yorker', 'Oct. 22, 2026', 'https://www.newyorker.com/news/the-political-scene/how-ice-is-targeting-the-2026-midterms'],
      ['Wisconsin elections officials issue guidance for handling federal agents at polls', 'Associated Press', 'Oct. 16, 2026', 'https://apnews.com/article/cfcff1f3a59707bb4139a63901a9e1cd']
    ]
  },
  {
    id: 'ballot-rules', category: 'The franchise',
    line: 'He has attempted to alter the rules of the ballot by executive will, against the authority reserved to states and Congress.',
    headline: 'Trump issued election orders seeking proof-of-citizenship requirements, federal voter lists, and restrictions on mail ballots; significant provisions were blocked by courts.',
    summary: 'Different parts of the administration’s election program have met different outcomes. Courts have blocked major citizenship and mail-ballot provisions, while other litigation remains pending. The administration argues these measures protect election integrity; opponents say they risk excluding eligible voters.',
    sources: [
      ['Judge blocks additional citizenship provisions in latest setback to Trump’s wide-ranging election executive order', 'PBS News / AP', 'Feb. 2, 2026', 'https://www.pbs.org/newshour/politics/judge-blocks-additional-citizenship-provisions-in-latest-setback-to-trumps-wide-ranging-election-executive-order'],
      ['Democrats sue to block Trump’s executive order targeting mail ballots', 'PBS News / AP', 'Apr. 2, 2026', 'https://www.pbs.org/newshour/politics/democrats-sue-to-block-trumps-executive-order-targeting-mail-ballots'],
      ['What to know about Trump’s effort to restrict mail ballots', 'PBS NewsHour', 'Sep. 4, 2026', 'https://www.pbs.org/video/mail-in-voting-1788552117/']
    ]
  },
  {
    id: 'voter-rolls', category: 'The franchise',
    line: 'He has pressed states to surrender the rolls of their electors to a central authority asserting unproven fraud.',
    headline: 'The Justice Department has pursued voter-registration records and alleged noncitizen registrations, drawing legal defeats and objections from state officials.',
    summary: 'Officials say they are enforcing the prohibition on noncitizen voting. State election administrators and voting-rights advocates dispute the scale of alleged fraud and challenge the breadth and legality of federal demands. One federal judge ruled a DOJ use of voter rolls unlawful in October.',
    sources: [
      ['US judge rules Justice Department use of voter rolls unlawful', 'Reuters', 'Oct. 9, 2026', 'https://www.reuters.com/world/us-judge-rules-justice-department-use-voter-rolls-unlawful-2026-10-09/'],
      ['Justice Department threatens California with legal action over claim of noncitizens on voter rolls', 'Associated Press', 'Oct. 14, 2026', 'https://apnews.com/article/e08ec04efdb1110c0e3f815f2ce6a3db'],
      ['Justice Department charges more than 2 dozen in California sweep targeting alleged noncitizen voters', 'Associated Press', 'Oct. 19, 2026', 'https://apnews.com/article/60e3dd468f43e0e8a32e6bf69341f189']
    ]
  },
  {
    id: 'citizen-detention', category: 'Liberty and due process',
    line: 'He has permitted a dragnet in which even citizens of the republic are seized and confined.',
    headline: 'ProPublica documented more than 500 reported detentions of U.S. citizens by federal immigration agents from January 2025 through September 2026.',
    summary: 'ProPublica assembled incidents from public records, reporting, and video; its count is not an official government tally. PBS NewsHour interviewed its investigators on October 21. The cases include citizens taken in immigration operations and people arrested around protests or encounters with agents.',
    sources: [
      ['Federal Agents Have Detained More Than 500 American Citizens in Trump’s Immigration Crackdown', 'ProPublica', 'Oct. 6, 2026', 'https://projects.propublica.org/american-citizens-detained-dhs-civil-rights/'],
      ['Investigation finds hundreds of citizens detained by ICE', 'PBS NewsHour', 'Oct. 21, 2026', 'https://pr.pbs.org/video/detaining-americans-1792618367/'],
      ['U.S. citizens detained by immigration agents describe how they were treated', 'PBS NewsHour', 'Feb. 13, 2026', 'https://www.pbs.org/newshour/show/u-s-citizens-detained-by-immigration-agents-describe-how-they-were-treated']
    ]
  },
  {
    id: 'courthouse-arrests', category: 'Liberty and due process',
    line: 'He has transformed the threshold of a court into an occasion for arrest, deterring people from seeking judgment.',
    headline: 'Immigration agents arrested people appearing for required court proceedings, a practice later struck down by a federal district court.',
    summary: 'Reporting described arrests at immigration hearings and firings of judges. On October 1, 2026, a federal court invalidated an ICE courthouse-arrest policy. The administration has defended expedited enforcement as necessary to carry out immigration law.',
    sources: [
      ['They thought they were in court for a routine immigration hearing, but walked into a deportation trap', 'PBS News / AP', 'Nov. 2025', 'https://www.pbs.org/newshour/nation/they-thought-they-were-in-court-for-a-routine-immigration-hearing-but-walked-into-a-deportation-trap'],
      ['Federal Court Strikes Down ICE’s Courthouse Arrest Policy Nationwide', 'ACLU', 'Oct. 1, 2026', 'https://www.aclu.org/press-releases/federal-court-strikes-down-ices-courthouse-arrest-policy-nationwide'],
      ['Fired immigration judge gives inside look at Trump’s deportation agenda', 'PBS NewsHour', 'Apr. 30, 2026', 'https://www.pbs.org/newshour/show/fired-immigration-judge-gives-inside-look-at-trumps-deportation-agenda']
    ]
  },
  {
    id: 'birthright', category: 'Liberty and due process',
    line: 'He has sought to withhold citizenship from children born beneath the Constitution’s protection.',
    headline: 'Trump attempted to narrow birthright citizenship by executive order; the Supreme Court rejected the effort in June 2026.',
    summary: 'The order would have denied automatic citizenship to some U.S.-born children based on parental status. The Supreme Court rejected the administration’s bid; the ruling preserves the established statutory protection, while the opinions differed in how they treated the Fourteenth Amendment.',
    sources: [
      ['Supreme Court rejects Trump bid to restrict birthright citizenship', 'Reuters', 'Jun. 30, 2026', 'https://www.reuters.com/legal/government/supreme-court-rule-trump-bid-limit-birthright-citizenship-2026-06-30/'],
      ['Judge blocks Trump’s birthright citizenship order in 3rd ruling since Supreme Court decision', 'PBS News / AP', 'Jul. 2025', 'https://www.pbs.org/newshour/politics/judge-blocks-trumps-birthright-citizenship-order-in-3rd-ruling-since-supreme-court-decision']
    ]
  },
  {
    id: 'masked-force', category: 'Liberty and due process',
    line: 'He has filled the streets with masked federal agents whose force has fallen upon protesters, observers, and bystanders.',
    headline: 'Immigration enforcement expanded into militarized domestic operations, with documented detentions of observers and U.S. citizens.',
    summary: 'PBS and ProPublica documented the spread of immigration arrests into public protests and other encounters. Reuters described the detention of people who followed immigration agents to observe their operations. Federal officials maintain that agents face threats and must be able to enforce the law safely.',
    sources: [
      ['Trump’s ICE force is sweeping America. Billions in his tax and spending cuts bill are paying for it', 'PBS News / AP', 'Jan. 2026', 'https://www.pbs.org/newshour/nation/trumps-ice-force-is-sweeping-america-billions-in-his-tax-and-spending-cuts-bill-are-paying-for-it'],
      ['ICE is cracking down on people who follow them in their cars', 'Reuters', 'Feb. 10, 2026', 'https://www.reuters.com/world/us/ice-is-cracking-down-people-who-follow-them-their-cars-2026-02-10/'],
      ['FRONTLINE, ProPublica Investigate How Protestors and Bystanders Were Caught Up in the Trump Administration’s Immigration Crackdown', 'PBS FRONTLINE', 'Apr. 2026', 'https://www.pbs.org/wgbh/frontline/announcement/frontline-propublica-investigate-how-protestors-and-bystanders-were-caught-up-in-the-trump-administrations-immigration-crackdown/']
    ]
  },
  {
    id: 'russian-sanctions', category: 'The world beyond',
    line: 'He has loosened the restraints upon an aggressor while applying new pressure to the nation under attack.',
    headline: 'In October 2026, Trump eased or waived Russia-related sanctions and concluded a diesel arrangement with Moscow as he pressed Ukraine to curb refinery attacks.',
    summary: 'The White House presents these steps as part of an effort to reduce fuel costs and bring Russia to negotiations. Reuters reported bipartisan concern in Congress that they relax pressure on Putin without comparable concessions, while Trump’s criticism of Ukraine intensified.',
    sources: [
      ['Republican backlash over Russia policy poses challenge for Trump in Congress', 'Reuters', 'Oct. 22, 2026', 'https://www.reuters.com/legal/government/republican-backlash-over-russia-policy-poses-challenge-trump-congress-2026-10-22/'],
      ['US envoy Witkoff to meet Putin, Trump presses Kyiv to settle', 'Reuters', 'Oct. 20, 2026', 'https://www.reuters.com/business/media-telecom/zelenskiy-meet-witkoff-trump-praises-russia-rebukes-ukraine-2026-10-20/'],
      ['Trump waives many Russia-related sanctions, tariffs before they were to take effect', 'Reuters', 'Oct. 17, 2026', 'https://www.reuters.com/world/europe/trump-waives-many-russia-related-sanctions-tariffs-before-they-were-take-effect-2026-10-17/']
    ]
  },
  {
    id: 'starshield', category: 'The world beyond',
    line: 'He has allowed a besieged ally’s vital communications to become an instrument of coercion and uncertainty.',
    headline: 'Ukraine reported restrictions to military Starshield service that hampered drone operations; reports disagree about whether the order came from the White House or Elon Musk.',
    summary: 'Reuters, citing officials, reported an instruction from inside the White House; The Wall Street Journal, as summarized by Reuters, reported that Musk ordered the slowdown. Trump and Musk disputed responsibility. The restriction and its operational effects are reported, but personal responsibility remains contested; this grievance does not claim that all Starlink satellites were shut off.',
    sources: [
      ['Order to limit Starshield for Ukraine came from inside White House, sources say', 'Reuters', 'Oct. 15, 2026', 'https://www.reuters.com/world/europe/order-limit-starshield-ukraine-came-inside-white-house-sources-say-2026-10-15/'],
      ['Musk ordered slowdown of Starlink service used by Ukraine’s military, WSJ reports', 'Reuters', 'Oct. 20, 2026', 'https://www.reuters.com/business/media-telecom/musk-ordered-starlink-slowdown-that-blindsided-ukraine-wsj-reports-2026-10-20/'],
      ['Palantir says it cannot shut off NATO AI system as Europeans fear US tech dependence', 'Reuters', 'Oct. 22, 2026', 'https://www.reuters.com/business/media-telecom/palantir-says-it-cannot-shut-off-nato-ai-system-europeans-fear-us-tech-2026-10-22/']
    ]
  },
  {
    id: 'nato', category: 'The world beyond',
    line: 'He has made the pledges of common defense appear conditional, withdrawing reassurance from exposed allies.',
    headline: 'U.S. troop reductions in Germany and the Baltic region, coupled with presidential threats and limited consultation, have unsettled NATO partners.',
    summary: 'Reuters documented troop withdrawals and European alarm. U.S. officials argue that Europe should shoulder more defense responsibility; NATO leaders have also publicly emphasized continuing alliance commitments. The grievance concerns erosion of confidence, not a claim that the United States formally left NATO.',
    sources: [
      ['Trump’s Germany troop cuts show limits of NATO efforts to keep US on board', 'Reuters', 'May 4, 2026', 'https://www.reuters.com/world/trumps-germany-troop-cuts-show-limits-nato-efforts-keep-us-board-2026-05-04/'],
      ['Quiet U.S. pullback in Eastern Europe sparks wider allied worries', 'Reuters', 'Jul. 16, 2026', 'https://www.reuters.com/business/aerospace-defense/quiet-us-pullback-eastern-europe-sparks-wider-allied-worries-2026-07-16/']
    ]
  },
  {
    id: 'canada', category: 'The world beyond',
    line: 'He has treated neighbors and ancient partners as adversaries in commerce, weakening bonds of mutual advantage.',
    headline: 'The administration’s tariffs and failed negotiations with Canada have fractured an exceptionally close trading relationship.',
    summary: 'After bilateral talks failed in August 2026, the United States imposed steep tariffs on Canadian products and Canada announced retaliation. Leaders on both sides described an enduring change in the relationship; supporters of the tariffs argue they defend U.S. industries.',
    sources: [
      ['A trade war between Canada and the US further ruptures a once-close and durable alliance', 'Associated Press', 'Aug. 22, 2026', 'https://apnews.com/article/4d18583fe52134ca8550652ad9772d2c'],
      ['Canadian firms’ outlooks dimmed after trade talks collapse, BoC survey finds', 'Reuters', 'Oct. 19, 2026', 'https://www.reuters.com/business/canadian-firms-outlooks-dimmed-after-trade-talks-collapse-boc-survey-finds-2026-10-19/'],
      ['Carney says Trump’s tariffs hurt Americans as US Embassy alleges Canadian interference', 'Associated Press', 'Oct. 22, 2026', 'https://apnews.com/article/a9b923802d5e2d5a37f0e213db91ef56']
    ]
  },
  {
    id: 'humanitarian-aid', category: 'Moral obligation',
    line: 'He has withdrawn life-preserving assistance from the vulnerable, leaving preventable suffering in its wake.',
    headline: 'The dismantling of USAID and abrupt aid reductions disrupted health services abroad, with PBS reporting deadly consequences in Uganda and Afghanistan.',
    summary: 'The administration says it is replacing the previous aid structure with smaller, country-led arrangements. On-the-ground reporting documents interrupted medical services and disease-related deaths. Precise global mortality estimates are contested and are not asserted here as measured facts.',
    sources: [
      ['Uganda sees spike in disease-related deaths after elimination of USAID', 'PBS NewsHour', 'Apr. 22, 2026', 'https://www.pbs.org/newshour/show/uganda-sees-spike-in-disease-related-deaths-after-elimination-of-usaid'],
      ['The devastating impact of USAID cuts in rural Afghanistan', 'PBS NewsHour', 'Aug. 25, 2026', 'https://www.pbs.org/video/the-devastating-impact-of-usaid-cuts-in-rural-afghanistan-1787699229/'],
      ['“America First” aid policy reshapes how U.S. delivers global health assistance', 'PBS NewsHour', 'Apr. 23, 2026', 'https://www.pbs.org/newshour/show/america-first-aid-policy-reshapes-how-u-s-delivers-global-health-assistance']
    ]
  },
  {
    id: 'science', category: 'Moral obligation',
    line: 'He has diminished the nation’s pursuit of knowledge, making scientific inquiry vulnerable to political favor.',
    headline: 'Grant cancellations, proposed funding cuts, and political pressure on research have disrupted U.S. science and prompted researchers to leave.',
    summary: 'A federal appeals court held that the administration could not impose a steep NIH indirect-cost cap. Associated Press reporting traced a broader loss of scientists and uncertain funding. The White House says it is reducing waste and prioritizing research it considers valuable.',
    sources: [
      ['Trump administration cannot slash NIH research funding, court rules', 'Reuters', 'Jan. 5, 2026', 'https://www.reuters.com/world/trump-administration-cannot-slash-nih-research-funding-court-rules-2026-01-05/'],
      ['Meet the researchers leaving the US because of Trump’s funding cuts and politicization of science', 'Associated Press', 'Oct. 19, 2026', 'https://apnews.com/article/9f4c34581f4343f316a5e72852a71b51']
    ]
  },
  {
    id: 'foreign-gifts', category: 'Public trust',
    line: 'He has welcomed extravagant favors from foreign powers while exercising the authority to negotiate with them.',
    headline: 'The administration’s plan to accept a luxury Boeing 747 from Qatar raised bipartisan constitutional, security, and conflict-of-interest concerns.',
    summary: 'The proposed arrangement would place a high-value foreign-government aircraft into U.S. government service. Trump defended it as a transparent gift to the Defense Department, rather than to him personally. Critics questioned the Emoluments Clause, the costs of modification, security, and whether a foreign power should provide a presidential aircraft. The existence of concerns is established; an unlawful personal payment has not been proved here.',
    sources: [
      ['Trump plans to accept luxury 747 from Qatar to use as Air Force One, ABC News says', 'Reuters', 'May 12, 2025', 'https://www.reuters.com/business/aerospace-defense/trump-set-accept-luxury-747-qatar-use-air-force-one-abc-news-says-2025-05-11/'],
      ["Trump’s ‘palace in the sky’ plane gift concerns some Republican senators", 'Reuters', 'May 14, 2025', 'https://www.reuters.com/business/aerospace-defense/top-us-senate-democrat-block-trump-doj-nominees-over-qatar-airplane-2025-05-13/'],
      ['Is Qatar’s gift plane to President Trump allowed under US law?', 'Reuters', 'May 15, 2025', 'https://www.reuters.com/world/us/is-qatars-gift-plane-president-trump-allowed-under-us-law-2025-05-15/']
    ]
  },
  {
    id: 'lawyers', category: 'The rule of law',
    line: 'He has sought to punish attorneys and firms for the clients they have represented and the causes they have defended.',
    headline: 'Executive orders targeting major law firms were blocked in court, after judges found serious constitutional defects in the administration’s penalties.',
    summary: 'The orders restricted access to federal buildings, contracting, and security clearances at firms whose past legal work drew presidential hostility. Three firms obtained permanent injunctions in 2025; appeals remain pending. The White House has asserted broad authority over executive-branch dealings. The courts treated the constitutional right to petition and the independence of counsel as central questions.',
    sources: [
      ["Trump administration loses bid to disqualify Susman Godfrey from lawyer group’s lawsuit", 'Reuters', 'Oct. 16, 2026', 'https://www.reuters.com/legal/government/trump-administration-loses-bid-disqualify-susman-godfrey-lawyer-groups-lawsuit-2026-10-16/'],
      ['Lobbyist sues over ban from consumer product agency, cites law firms’ wins in Trump cases', 'Reuters', 'Oct. 20, 2026', 'https://www.reuters.com/legal/government/lobbyist-sues-over-ban-consumer-product-agency-cites-law-firms-wins-trump-cases-2026-10-20/']
    ]
  },
  {
    id: 'funding-freeze', category: 'Checks on power',
    line: 'He has attempted to suspend money appropriated by the people’s representatives through sweeping executive decree.',
    headline: 'A federal appeals court largely upheld an injunction against a government-wide funding freeze affecting potentially trillions of dollars in federal assistance.',
    summary: 'In January 2025, the Office of Management and Budget directed agencies to pause grants and loans while evaluating their consistency with the new administration’s policies. The memo was withdrawn after legal challenges, but states argued the freeze continued in practice. In March 2026, an appeals court largely agreed that the categorical approach failed to consider recipients’ reliance interests; it also narrowed part of the relief concerning payments.',
    sources: [
      ["Trump administration cannot implement ‘sweeping’ funding freeze, US court rules", 'Reuters', 'Mar. 17, 2026', 'https://www.reuters.com/legal/government/trump-administration-cannot-implement-sweeping-funding-freeze-us-court-rules-2026-03-17/'],
      ['US appeals court says Trump cannot continue foreign aid cuts', 'Reuters', 'Sep. 5, 2025', 'https://www.reuters.com/legal/government/us-appeals-court-says-trump-cannot-continue-foreign-aid-cuts-2025-09-05/']
    ]
  },
  {
    id: 'doge', category: 'Checks on power',
    line: 'He has entrusted the restructuring of public institutions to a private billionaire’s project whose savings claims resisted scrutiny.',
    headline: 'Elon Musk’s DOGE operation gained exceptional access across federal agencies, accelerated workforce reductions, and published savings figures Reuters found riddled with errors.',
    summary: 'The White House presented DOGE as an efficiency initiative to reduce waste and spending. Reuters found inflated, duplicate, or nonexistent savings on its public website, while the initiative helped dismiss workers and cancel contracts. The federal civilian workforce subsequently shrank substantially, though reductions reflected a combination of firings, retirements, resignations, and buyouts, not DOGE firings alone.',
    sources: [
      ["DOGE website offers error-filled window into Musk’s government overhaul", 'Reuters', 'Mar. 4, 2025', 'https://www.reuters.com/world/us/doge-website-offers-error-filled-window-into-musks-government-overhaul-2025-03-04/'],
      ['US government to shed 317,000 workers this year, Trump’s HR chief says', 'Reuters', 'Nov. 24, 2025', 'https://www.reuters.com/legal/litigation/us-government-shed-317000-workers-this-year-trumps-hr-chief-says-2025-11-24/'],
      ['US government shed 386,826 workers in Trump’s first year back in power', 'Reuters', 'Mar. 4, 2026', 'https://www.reuters.com/world/us/us-government-shed-386826-workers-trumps-first-year-back-power-2026-03-04/']
    ]
  },
  {
    id: 'lethal-force', category: 'Liberty and due process',
    line: 'He has defended federal officers after citizens were killed, even as evidence and the demands of local justice called official accounts into question.',
    headline: 'Federal immigration officers fatally shot U.S. citizens Renee Good and Alex Pretti in Minneapolis; investigations and litigation have disputed the officers’ conduct and initial official narratives.',
    summary: 'Both deaths occurred during the administration’s intensive immigration enforcement operations in January 2026. Video and witness evidence challenged aspects of early federal descriptions. State investigators said federal authorities initially withheld materials, before turning over evidence in July. Good’s family sued in October; the White House called the suits baseless. This page does not prejudge individual criminal liability.',
    sources: [
      ["In six violent encounters, evidence contradicts Trump immigration officials’ narratives", 'Reuters', 'Jan. 28, 2026', 'https://www.reuters.com/world/us/evidence-contradicts-trump-immigration-officials-accounts-violent-encounters-2026-01-27/'],
      ["Trump officials turn over withheld evidence in immigration agents’ killings of Renee Good, Alex Pretti", 'Reuters', 'Jul. 13, 2026', 'https://www.reuters.com/legal/government/trump-officials-turn-over-withheld-evidence-immigration-agents-killings-renee-2026-07-13/'],
      ["Renee Good’s family sues Trump administration over fatal Minneapolis shooting", 'Reuters', 'Oct. 1, 2026', 'https://www.reuters.com/world/renee-goods-family-sues-trump-administration-over-fatal-minneapolis-shooting-2026-10-01/']
    ]
  },
  {
    id: 'public-health', category: 'Moral obligation',
    line: 'He has subjected protections against preventable childhood disease to an erratic revision of scientific advice.',
    headline: 'Federal health officials attempted to reduce recommended childhood vaccinations after reshaping the CDC’s advisory panel; a judge temporarily blocked the changes.',
    summary: 'Health Secretary Robert F. Kennedy Jr. replaced vaccine advisers and pursued changes to longstanding recommendations. A March 2026 ruling found substantial problems with the process and temporarily preserved earlier recommendations. Officials have argued the review strengthens parental choice and trust; medical organizations warn that weakened recommendations jeopardize prevention.',
    sources: [
      ['RFK-appointed CDC panel drops hepatitis B vaccine at birth recommendation', 'PBS NewsHour', 'Dec. 5, 2025', 'https://www.pbs.org/newshour/show/rfk-appointed-cdc-panel-drops-hepatitis-b-vaccine-at-birth-recommendation'],
      ['Judge blocks RFK Jr. from scaling back childhood vaccine recommendations', 'PBS News', 'Mar. 16, 2026', 'https://www.pbs.org/newshour/health/judge-blocks-rfk-jr-from-scaling-back-childhood-vaccine-recommendations'],
      ["The Trump administration just updated rules for CDC’s vaccine advisory panel, allowing inclusion of RFK Jr. allies", 'PBS News', 'Apr. 10, 2026', 'https://www.pbs.org/newshour/health/the-trump-administration-just-updated-rules-for-cdcs-vaccine-advisory-panel-allowing-inclusion-of-rfk-jr-allies']
    ]
  },
  {
    id: 'climate', category: 'Moral obligation',
    line: 'He has cast aside protections for air, climate, and endangered life, leaving future generations to bear the risk.',
    headline: 'The EPA revoked the 2009 greenhouse-gas endangerment finding and associated vehicle-emission standards as the administration pursued wider environmental rollbacks.',
    summary: 'The agency’s February 2026 action withdrew a foundation of federal greenhouse-gas regulation for motor vehicles. It relied principally on a disputed reading of statutory authority, rather than a finalized finding that greenhouse gases are harmless. The administration argues that the rollback reduces regulatory burdens; opponents say it sacrifices public health and climate protections. Litigation and state-level regulation continue.',
    sources: [
      ["EPA’s endangerment finding repeal signals federal exit from regulating motor vehicle GHG emissions, but state efforts continue", 'Reuters Legal', 'May 19, 2026', 'https://www.reuters.com/legal/legalindustry/epas-endangerment-finding-repeal-signals-federal-exit-regulating-motor-vehicle--pracin-2026-05-19/'],
      ['Timeline: Trump administration moves to weaken endangered species protections', 'Reuters', 'Sep. 21, 2026', 'https://www.reuters.com/legal/litigation/timeline-trump-administration-moves-weaken-endangered-species-protections-2026-09-21/'],
      ['Trump rolls back landmark policy regulating greenhouse emissions', 'PBS NewsHour', 'Feb. 12, 2026', 'https://www.pbs.org/newshour/show/trump-rolls-back-landmark-policy-regulating-greenhouse-emissions']
    ]
  }
];
