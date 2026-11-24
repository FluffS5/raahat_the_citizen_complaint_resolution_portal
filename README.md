# Raahat

**A citizen complaint platform that combines the accountability of formal ticketing with the visibility of a public feed, so complaints are resolved on need, not on virality.**

Raahat is a research-based prototype for civic grievance redressal in India. It grows out of the paper *"Equity or Virality? A Comparative Analysis of Formal Ticketing Systems and Social Media Platforms (Twitter/X) for Citizen Complaint Resolution in E-Governance"* by Swarangi Yogesh Mohare. The paper is an unpublished study; you can **[view the research paper (PDF)](public/research-paper.pdf)** for reference.

---

## The problem

Citizens in India raise civic complaints through two very different channels:

| Formal ticketing (e.g. CPGRAMS) | Social media (Twitter/X) |
|---|---|
| Equitable, trackable, accountable | Fast, easy, creates public pressure |
| Slow, low awareness, hard to file | Rewards influence and virality |
| Each complaint processed separately, with no grouping by locality | No guarantee of real resolution |

The research found that **neither channel alone gives a satisfactory experience**, and that complaints on social media may get attention because they are viral, not because they are urgent.

### Key findings from the study
Mixed-methods study: survey of 44 respondents plus CPGRAMS reports and literature.

- **56.8%** believe viral complaints are more likely to be resolved, the strongest perception in the whole survey.
- **72.7%** have never filed on a formal portal, even though **100%** use the internet daily. The barrier is awareness, not access.
- **50%** of portal users waited more than a week for a response, and **16.7%** never heard back.
- **13.6%** say neither channel works, a trust deficit that points towards a hybrid model.

The paper concludes that an integrated, hybrid complaint ecosystem can be more inclusive and responsive. Raahat is an attempt at that system.

---

## What Raahat does

1. **File a complaint.** A structured ticket goes to the relevant authority, so the formal trail is never lost.
2. **Share it publicly.** The citizen can post about it in a social-style feed with the relevant authorities tagged.
3. **Neighbours join in.** Someone filing a similar issue is shown matching posts and asked whether it is the same complaint. The original complainant's name is never disclosed. Residents who don't want to file can still upvote the cause.
4. **Officials respond in public.** Authorities post work-completed or delay updates in the feed.
5. **The citizen closes the loop.** Tickets move through visible statuses that end with the citizen confirming the fix or reopening the complaint, not with an officer simply marking it closed.

### Core features
- Complaint filing with ticket tracking
- Public feed with official work and delay updates
- Upvotes to show support for a complaint
- Locality-based clustering: multiple complaints about the same local issue are grouped and handled together (a gap found in CPGRAMS), with issue severity considered alongside
- Duplicate prevention by showing matching complaints before a new one is filed
- Transparent, detailed ticket statuses ending with citizen confirm or reopen

---

## Prototype scope

| In this prototype | Future scope | Left out for now |
|---|---|---|
| Homepage explaining the project, with the flow shown on a sample dataset | Aadhaar-linked accounts to prevent duplicate logins | Downvotes |
| Filing, public feed, upvotes, status flow | Live, real-time clustering | Public comments |
| Clustering demonstrated on sample data | Automatic address resolution once authorities are onboarded | Naming individual officers in posts |

---

## Tech stack

- **Frontend:** [Vite](https://vitejs.dev/)
- **Backend / database / auth:** [Supabase](https://supabase.com/) (client included, not yet used by the homepage)
- **Hosting:** Vercel

The stack is provisional and may change as the project develops.

---

## Reference

Mohare, S. Y. *Equity or Virality? A Comparative Analysis of Formal Ticketing Systems and Social Media Platforms (Twitter/X) for Citizen Complaint Resolution in E-Governance.* MCA research study (unpublished). [View the paper (PDF)](public/research-paper.pdf).

## Author

**Swarangi Mohare**
MCA, DES's Navinchandra Mehta Institute of Technology and Development (NMITD), Mumbai, University of Mumbai

---

*Raahat is a student research prototype. It is not affiliated with any government body and does not use any official emblem.*

**Off Campus code: HY67G9**
